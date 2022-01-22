import 'reflect-metadata';
import 'regenerator-runtime';
import { Server as server } from './Server.class';

export { Dataset } from './Server.class';
export const Server = new server();

// types
export type { NewsItemExtended, NewsItem, NewsItemId } from './@types';
