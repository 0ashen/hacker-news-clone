import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { NewsItemExtended, NewsItemId } from './@types';
declare enum RemoveTable {
    TopStories = "topstories",
    NewStories = "newstories",
    DestStories = "beststories",
    MaxItem = "maxitem",
    AskStories = "askstories",
    ShowStories = "showstories",
    JobStories = "jobstories",
    Updates = "updates"
}
export declare enum Dataset {
    TopStories = "topstories"
}
declare type Store = {
    tables: {
        [x in RemoveTable]: NewsItemId[];
    };
    items: NewsItemExtended[];
};
export declare class Server {
    /** hacker news firebase api */
    private api;
    private store;
    private sync;
    constructor(
    /** hacker news firebase api */
    api?: firebase.database.Reference, store?: Store);
    private setSyncStatus;
    private subscribeToTable;
    private fetchItem;
    private startSyncOnce;
    private setTable;
    private setItem;
    private extendNewsItem;
    getDataSet(set: Dataset): Promise<(NewsItemExtended | undefined)[]>;
}
export {};
