import { HackerNewsItem, HackerNewsItemId } from 'hacker-news-types/src/HackerNews';

export type NewsItemExtended = HackerNewsItem & {
   timestamp: number
   relativeTime?: string
}


export type NewsItem = HackerNewsItem
export type NewsItemId = HackerNewsItemId