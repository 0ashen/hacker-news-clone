import { MongoService } from 'mongo-service';
import { model, Schema } from 'mongoose';
import { HnCategories } from 'types';
import { hackerNewsService } from '~/hacker-news-api';

interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

async function start(): Promise<void> {
  await MongoService.connect();

  const user = new User({
    name: 'Bill',
    email: 'bill@initech.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png'
  });
  await user.save();

  hackerNewsService.subscribeToCategory(HnCategories.TopStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.NewStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.DestStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.MaxItem, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.AskStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.ShowStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.JobStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategories.Updates, (data) => {
  });
  console.log('Sync DB with HN started successfully ^^');
}

start()
  // // eslint-disable-next-line no-console
  // .then(() => console.log('Sync DB with HN started successfully ^^'))
  // // eslint-disable-next-line no-console
  // .catch((error) => console.log('Server start failed', error));
