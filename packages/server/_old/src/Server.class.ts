import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { config } from './config';
import { NewsItem, NewsItemExtended, NewsItemId } from './@types';
import * as moment from 'moment';

enum RemoteTable {
   TopStories = 'topstories',
   NewStories = 'newstories',
   DestStories = 'beststories',
   MaxItem = 'maxitem',
   AskStories = 'askstories',
   ShowStories = 'showstories',
   JobStories = 'jobstories',
   Updates = 'updates'
}

export enum Dataset {
   TopStories = 'topstories'
}

type Store = {
   tables: { [x in RemoteTable]: NewsItemId[] };
   items: NewsItemExtended[];
};

enum SyncStatus {
   Off,
   Pending,
   On
}

type Sync = {
   _status: SyncStatus;
   promise?: Promise<void[]>;
};

export class Server {
   private sync: Sync = {
      _status: SyncStatus.Off
   };

   constructor(
      /** hacker news firebase api */
      private api: firebase.database.Reference = firebase
         .initializeApp({
            databaseURL: config.apiHackerNewsUrl
         })
         .database()
         .ref('v0'),
      private store: Store = {
         tables: Object.values(RemoteTable).reduce((acc, cur) => {
            acc[cur] = [];
            return acc;
         }, {} as { [x in RemoteTable]: [] }),
         items: []
      }
   ) {}

   private setSyncStatus(status: SyncStatus) {
      this.sync._status = status;
   }

   private async subscribeToTable(table: RemoteTable): Promise<void> {
      return new Promise<void>((res) => {
         this.api.child(table).on('value', (snapshot) => {
            // todo deprecate "any type" in snapshot.val() below
            this.setTable(table, snapshot.val());
            res();
         });
      });
   }

   private async fetchItem(id: NewsItemId) {
      return new Promise<void>((res) => {
         this.api.child('item/' + id).once('value', (snapshot) => {
            // todo deprecate "any type" in snapshot.val() below
            this.setItem(snapshot.val());
            res();
         });
      });
   }

   private async startSyncOnce(): Promise<void> {
      if (this.sync._status === SyncStatus.Off) {
         this.setSyncStatus(SyncStatus.Pending);
         this.sync.promise = Promise.all(
            Object.values(RemoteTable).map((table) => this.subscribeToTable(table))
         ).finally(() => {
            this.setSyncStatus(SyncStatus.On);
         });
         await this.sync.promise;
      }
      if (this.sync._status === SyncStatus.Pending) {
         await this.sync.promise;
      }
   }

   private setTable(table: RemoteTable, data: NewsItemId[]): void {
      this.store.tables[table] = data;
   }

   private setItem(item: NewsItem): void {
      const _item = this.extendNewsItem(item);
      const idx = this.store.items.findIndex((el) => el.id === _item.id);
      const alreadyHaveItemInStore = idx !== -1;
      if (alreadyHaveItemInStore) {
         this.store.items[idx] = _item;
      } else {
         this.store.items.unshift(_item);
      }
      if (this.store.items.length > 3000) {
         this.store.items = this.store.items.slice(0, 3000);
      }
   }

   private extendNewsItem(item: NewsItem): NewsItemExtended {
      const { time, url } = item;
      let hostname = null;
      try {
         hostname = new URL(url).hostname;
      } catch (e) {

      }
      return {
         ...item,
         hostname,
         timestamp: Date.now(),
         //@ts-ignore
         relativeTime: moment(time * 1000, 'unix').fromNow()
      };
   }

   public async getDataSet(set: Dataset): Promise<(NewsItemExtended | undefined)[]> {
      await this.startSyncOnce();

      if (set === Dataset.TopStories) {
         const curDate = Date.now();

         const newsIds = this.store.tables[RemoteTable.TopStories].slice(0, 30);

         const promiseList = newsIds.map((id) => {
            const newsItem = this.store.items.find((newsItem) => newsItem.id === id);
            if (newsItem && curDate - newsItem.timestamp > config.outdatedDataLater) {
               return new Promise((res) => {
                  res(newsItem);
               });
            }
            return this.fetchItem(id);
         });
         await Promise.all(promiseList);

         const result = newsIds.map((id) => {
            const newsItem = this.store.items.find((newsItem) => newsItem.id === id);
            return newsItem;
         });

         return result
      }
      return []
   }
}
