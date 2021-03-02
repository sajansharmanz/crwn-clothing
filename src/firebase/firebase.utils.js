import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtp4majBuIRrUB_w5aMb11B2ezhUMWlIc",
    authDomain: "crwn-db-9b8a9.firebaseapp.com",
    projectId: "crwn-db-9b8a9",
    storageBucket: "crwn-db-9b8a9.appspot.com",
    messagingSenderId: "460223750806",
    appId: "1:460223750806:web:96f667d03b70a6eae1d8b7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;