import { HnNewsItemId } from './hn-news-item-id';
import { HnNewsItemType } from './hn-news-item-type';

export interface HnNewsItem {
  /** The username of the item's author. */
  by: HnNewsItemId;
  /** true if the item is dead. */
  dead: boolean;
  /** true if the item is deleted. */
  deleted: boolean;
  /** In the case of stories or polls, the total comment count. */
  descendants: number | undefined;
  /** The item's unique id. */
  id: HnNewsItemId;
  /** The IDs of the item's comments, in ranked display order. */
  kids: HnNewsItemId[];
  /** The comment's parent: either another comment or the relevant story. */
  parent: HnNewsItemId | undefined;
  /** A list of related pollopts, in display order. */
  parts: HnNewsItemId[];
  /** The pollopt's associated poll. */
  poll: HnNewsItemId | undefined;
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
  /** The title of the story, poll or job. HTML. */
  title: string;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt". */
  type: HnNewsItemType;
  /** The URL of the story. */
  url: string;
}
