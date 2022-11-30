import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { HnCategories } from 'types';
import { config } from '~/config';

class HackerNewsApiService {
  private api = firebase
    .initializeApp({
      databaseURL: config.apiUrl,
    })
    .database()
    .ref('v0');

  subscribeToCategory(category: HnCategories, callback: (data: Array<string>) => void): void {
    this.api.child(category).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }
}

export const hackerNewsService = new HackerNewsApiService();
