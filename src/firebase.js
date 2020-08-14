import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBpzA8y5BIgXxF5eiH9eVQw040XIFydwzk",
    authDomain: "twitter-clone-4971e.firebaseapp.com",
    databaseURL: "https://twitter-clone-4971e.firebaseio.com",
    projectId: "twitter-clone-4971e",
    storageBucket: "twitter-clone-4971e.appspot.com",
    messagingSenderId: "336732229758",
    appId: "1:336732229758:web:9328d70584e56758e9482f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;