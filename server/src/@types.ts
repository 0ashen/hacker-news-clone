export type NewsItemExtended = HackerNewsItem & {
   timestamp: number
   relativeTime?: string
   hostname: string | null;
}


export type NewsItem = HackerNewsItem
export type NewsItemId = HackerNewsItemId

/** Unique ID of a Hacker News item, positive integer */
export type HackerNewsItemId = number;
/** Unique ID of a Hacker News user, alphanumeric */
export type HackerNewsUserId = string;
/** Hacker News category */
export type HackerNewsStoryType = "top" | "new" | "best" | "ask" | "show" | "job";
/** Possible type of a Hacker News item */
export type HackerNewsItemType = "job" | "story" | "comment" | "poll" | "pollopt";

/**
 * A Hacker news item
 */
export interface HackerNewsItem {
   /** The item's unique id. */
   id: HackerNewsItemId,
   /** true if the item is deleted. */
   deleted: boolean,
   /** The type of item. One of "job", "story", "comment", "poll", or "pollopt". */
   type: HackerNewsItemType,
   /** The username of the item's author. */
   by: HackerNewsUserId,
   /** Creation date of the item, in Unix Time. */
   time: number,
   /** The comment, story or poll text. HTML. */
   text: string,
   /** true if the item is dead. */
   dead: boolean,
   /** The comment's parent: either another comment or the relevant story. */
   parent: HackerNewsItemId | undefined,
   /** The pollopt's associated poll. */
   poll: HackerNewsItemId | undefined,
   /** The IDs of the item's comments, in ranked display order. */
   kids: HackerNewsItemId[],
   /** The URL of the story. */
   url: string,
   /** The story's score, or the votes for a pollopt. */
   score: number,
   /** The title of the story, poll or job. HTML. */
   title: string,
   /** A list of related pollopts, in display order. */
   parts: HackerNewsItemId[],
   /** In the case of stories or polls, the total comment count. */
   descendants: number | undefined,
}

/**
 * Hacker news user data
 */
export interface HackerNewsUser {
   /** The user's unique username. Case-sensitive. Required. */
   id: HackerNewsUserId,
   /** Delay in minutes between a comment's creation and its visibility to other users. */
   delay: number,
   /** Creation date of the user, in Unix Time. */
   created: number,
   /** The user's karma. */
   karma: number,
   /** The user's optional self-description. HTML. */
   about: string,
   /** List of the user's stories, polls and comments. */
   submitted: number,
}