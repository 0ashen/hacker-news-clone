import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { config } from '~/config';

const hnapi = firebase
  .initializeApp({
    databaseURL: config.apiUrl,
  })
  .database()
  .ref('v0');

hnapi.child('topstories').on('value', (snapshot) => {
  console.log('2222&&&&8**&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', snapshot.val());
});

console.log('APP STARTED---=================');
