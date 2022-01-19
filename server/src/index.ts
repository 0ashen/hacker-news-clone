import 'reflect-metadata';
import 'regenerator-runtime';
import { Server as server } from './Server.class';
import { container } from 'tsyringe';

export { Dataset } from './Server.class';
export const Server = container.resolve(server);

// types
export type { NewsItemExtended, NewsItem, NewsItemId } from './@types';
