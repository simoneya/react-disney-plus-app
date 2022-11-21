
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6WVmsXz2ZejLm8LX5VPCHzYlvtMrC0Cc",
    authDomain: "disneyplus-clone-29a47.firebaseapp.com",
    projectId: "disneyplus-clone-29a47",
    storageBucket: "disneyplus-clone-29a47.appspot.com",
    messagingSenderId: "417198554236",
    appId: "1:417198554236:web:e2f440caeea3a5c0e41df9",
    measurementId: "G-F2RYXCEQ3H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;