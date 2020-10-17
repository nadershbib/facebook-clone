import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxzFYqX5sA9cBQ1n_5aZIBDXn-kozsBlk",
    authDomain: "facebook-clone-7353e.firebaseapp.com",
    databaseURL: "https://facebook-clone-7353e.firebaseio.com",
    projectId: "facebook-clone-7353e",
    storageBucket: "facebook-clone-7353e.appspot.com",
    messagingSenderId: "414985631667",
    appId: "1:414985631667:web:c1eb3bc1a8c880d538fdc6",
    measurementId: "G-82EBWDRV0K"
  };


 const fire = firebase.initializeApp(firebaseConfig);
 const db = fire.firestore();

 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 
export default db;
export {auth,provider};