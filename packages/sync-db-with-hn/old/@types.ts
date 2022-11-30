/** Unique ID of a Hacker News item, positive integer */
export type HackerNewsItemId = number;
/** Unique ID of a Hacker News user, alphanumeric */
export type HackerNewsUserId = string;
/** Hacker News category */
export type HackerNewsStoryType =
  'top'
  | 'new'
  | 'best'
  | 'ask'
  | 'show'
  | 'job';
/** Possible type of a Hacker News item */
export type HackerNewsItemType =
  'job'
  | 'story'
  | 'comment'
  | 'poll'
  | 'pollopt';

/**
 * A Hacker news item
 */
export interface HackerNewsItem {
  /** The username of the item's author. */
  by: HackerNewsUserId;
  /** true if the item is dead. */
  dead: boolean;
  /** true if the item is deleted. */
  deleted: boolean;
  /** In the case of stories or polls, the total comment count. */
  descendants: number | undefined;
  /** The item's unique id. */
  id: HackerNewsItemId;
  /** The IDs of the item's comments, in ranked display order. */
  kids: HackerNewsItemId[];
  /** The comment's parent: either another comment or the relevant story. */
  parent: HackerNewsItemId | undefined;
  /** A list of related pollopts, in display order. */
  parts: HackerNewsItemId[];
  /** The pollopt's associated poll. */
  poll: HackerNewsItemId | undefined;
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
  /** The title of the story, poll or job. HTML. */
  title: string;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt". */
  type: HackerNewsItemType;
  /** The URL of the story. */
  url: string;
}

export type NewsItem = HackerNewsItem;
export type NewsItemId = HackerNewsItemId;

export type NewsItemExtended = HackerNewsItem & {
  timestamp: number;
  relativeTime?: string;
  hostname: string | null;
};

/**
 * Hacker news user data
 */
export interface HackerNewsUser {
  /** The user's optional self-description. HTML. */
  about: string;
  /** Creation date of the user, in Unix Time. */
  created: number;
  /** Delay in minutes between a comment's creation and its visibility to other users. */
  delay: number;
  /** The user's unique username. Case-sensitive. Required. */
  id: HackerNewsUserId;
  /** The user's karma. */
  karma: number;
  /** List of the user's stories, polls and comments. */
  submitted: number;
}
