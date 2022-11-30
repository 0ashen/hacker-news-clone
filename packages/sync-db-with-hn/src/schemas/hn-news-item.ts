import { Schema } from 'mongoose';
import { HnNewsItem as IHnNewsItem } from 'types';

export const HnNewsItem = new Schema<IHnNewsItem>({
  by: undefined,
  dead: undefined,
  deleted: undefined,
  descendants: undefined,
  id: undefined,
  kids: undefined,
  parent: undefined,
  parts: undefined,
  poll: undefined,
  score: undefined,
  text: undefined,
  time: undefined,
  title: undefined,
  type: undefined,
  url: undefined
});
