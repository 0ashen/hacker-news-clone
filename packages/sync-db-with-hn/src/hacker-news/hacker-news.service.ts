import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { RemoteTables } from '~/@types';
import { config } from '~/config';

class HackerNewsService {
  private api = firebase
    .initializeApp({
      databaseURL: config.apiUrl,
    })
    .database()
    .ref('v0');

  subscribeToCategory(category: RemoteTables, callback: (data: Array<string>) => void): void {
    this.api.child(category).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }
}

export const hackerNewsService = new HackerNewsService();
