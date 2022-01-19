"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.Dataset = void 0;
const app_1 = require("firebase/compat/app");
require("firebase/compat/database");
const config_1 = require("./config");
const moment = require("moment");
var RemoveTable;
(function (RemoveTable) {
    RemoveTable["TopStories"] = "topstories";
    RemoveTable["NewStories"] = "newstories";
    RemoveTable["DestStories"] = "beststories";
    RemoveTable["MaxItem"] = "maxitem";
    RemoveTable["AskStories"] = "askstories";
    RemoveTable["ShowStories"] = "showstories";
    RemoveTable["JobStories"] = "jobstories";
    RemoveTable["Updates"] = "updates";
})(RemoveTable || (RemoveTable = {}));
var Dataset;
(function (Dataset) {
    Dataset["TopStories"] = "topstories";
})(Dataset = exports.Dataset || (exports.Dataset = {}));
var SyncStatus;
(function (SyncStatus) {
    SyncStatus[SyncStatus["Off"] = 0] = "Off";
    SyncStatus[SyncStatus["Pending"] = 1] = "Pending";
    SyncStatus[SyncStatus["On"] = 2] = "On";
})(SyncStatus || (SyncStatus = {}));
class Server {
    api;
    store;
    sync = {
        _status: SyncStatus.Off
    };
    constructor(
    /** hacker news firebase api */
    api = app_1.default
        .initializeApp({
        databaseURL: config_1.config.apiHackerNewsUrl
    })
        .database()
        .ref('v0'), store = {
        tables: Object.values(RemoveTable).reduce((acc, cur) => {
            acc[cur] = [];
            return acc;
        }, {}),
        items: []
    }) {
        this.api = api;
        this.store = store;
    }
    setSyncStatus(status) {
        this.sync._status = status;
    }
    async subscribeToTable(table) {
        return new Promise((res) => {
            this.api.child(table).on('value', (snapshot) => {
                // todo deprecate "any type" in snapshot.val() below
                this.setTable(table, snapshot.val());
                res();
            });
        });
    }
    async fetchItem(id) {
        return new Promise((res) => {
            this.api.child('item/' + id).once('value', (snapshot) => {
                // todo deprecate "any type" in snapshot.val() below
                this.setItem(snapshot.val());
                res();
            });
        });
    }
    async startSyncOnce() {
        if (this.sync._status === SyncStatus.Off) {
            this.setSyncStatus(SyncStatus.Pending);
            this.sync.promise = Promise.all(Object.values(RemoveTable).map((table) => this.subscribeToTable(table))).finally(() => {
                this.setSyncStatus(SyncStatus.On);
            });
            await this.sync.promise;
        }
        if (this.sync._status === SyncStatus.Pending) {
            await this.sync.promise;
        }
    }
    setTable(table, data) {
        this.store.tables[table] = data;
    }
    setItem(item) {
        const _item = this.extendNewsItem(item);
        const idx = this.store.items.findIndex((el) => el.id === _item.id);
        const alreadyHaveItemInStore = idx !== -1;
        if (alreadyHaveItemInStore) {
            this.store.items[idx] = _item;
        }
        else {
            this.store.items.unshift(_item);
        }
        if (this.store.items.length > 3000) {
            this.store.items = this.store.items.slice(0, 3000);
        }
    }
    extendNewsItem(item) {
        const { time } = item;
        return {
            ...item,
            timestamp: Date.now(),
            relativeTime: moment(time * 1000, 'unix').fromNow()
        };
    }
    async getDataSet(set) {
        await this.startSyncOnce();
        if (set === Dataset.TopStories) {
            const curDate = Date.now();
            const newsIds = this.store.tables[RemoveTable.TopStories].slice(0, 30);
            const promiseList = newsIds.map((id) => {
                const newsItem = this.store.items.find((newsItem) => newsItem.id === id);
                if (newsItem && curDate - newsItem.timestamp > config_1.config.outdatedDataLater) {
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
            return result;
        }
        return [];
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NlcnZlci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMkM7QUFDM0Msb0NBQWtDO0FBQ2xDLHFDQUFrQztBQUVsQyxpQ0FBaUM7QUFJakMsSUFBSyxXQVNKO0FBVEQsV0FBSyxXQUFXO0lBQ2Isd0NBQXlCLENBQUE7SUFDekIsd0NBQXlCLENBQUE7SUFDekIsMENBQTJCLENBQUE7SUFDM0Isa0NBQW1CLENBQUE7SUFDbkIsd0NBQXlCLENBQUE7SUFDekIsMENBQTJCLENBQUE7SUFDM0Isd0NBQXlCLENBQUE7SUFDekIsa0NBQW1CLENBQUE7QUFDdEIsQ0FBQyxFQVRJLFdBQVcsS0FBWCxXQUFXLFFBU2Y7QUFFRCxJQUFZLE9BRVg7QUFGRCxXQUFZLE9BQU87SUFDaEIsb0NBQXlCLENBQUE7QUFDNUIsQ0FBQyxFQUZXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUVsQjtBQU9ELElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNaLHlDQUFHLENBQUE7SUFDSCxpREFBTyxDQUFBO0lBQ1AsdUNBQUUsQ0FBQTtBQUNMLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBT0QsTUFBYSxNQUFNO0lBT0w7SUFNQTtJQVpILElBQUksR0FBUztRQUNsQixPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUc7S0FDekIsQ0FBQztJQUVGO0lBQ0csK0JBQStCO0lBQ3ZCLE1BQW1DLGFBQVE7U0FDL0MsYUFBYSxDQUFDO1FBQ1osV0FBVyxFQUFFLGVBQU0sQ0FBQyxnQkFBZ0I7S0FDdEMsQ0FBQztTQUNELFFBQVEsRUFBRTtTQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDTCxRQUFlO1FBQ3BCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFB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