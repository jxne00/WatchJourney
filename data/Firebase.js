import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqj8AOB55ymSX-yhF2N95AHr1-aKTW7Vk',
  authDomain: 'watchjourney-aecf9.firebaseapp.com',
  projectId: 'watchjourney-aecf9',
  storageBucket: 'watchjourney-aecf9.appspot.com',
  messagingSenderId: '314542424256',
  appId: '1:314542424256:web:2ac8b63bf26be128be2d25',
  measurementId: 'G-MHQ1D8LFZN',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
