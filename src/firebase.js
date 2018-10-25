import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDZbeZAqazb_XkmA6vNLz7_DqAyTfOd5Yc',
  authDomain: 'portfolio-7c164.firebaseapp.com',
  databaseURL: 'https://portfolio-7c164.firebaseio.com',
  projectId: 'portfolio-7c164',
  storageBucket: '',
  messagingSenderId: '979712917057',
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
