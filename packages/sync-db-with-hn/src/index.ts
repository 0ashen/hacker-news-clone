import { HnCategoriesEnum } from 'types/build';
import { hackerNewsService } from '~/hacker-news';

async function start(): Promise<void> {
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.TopStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.NewStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.DestStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.MaxItem, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.AskStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.ShowStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.JobStories, (data) => {
  });
  hackerNewsService.subscribeToCategory(HnCategoriesEnum.Updates, (data) => {
  });
}

start()
  // eslint-disable-next-line no-console
  .then(() => console.log('Server started successfully'))
  // eslint-disable-next-line no-console
  .catch((error) => console.log('Server start failed', error));
