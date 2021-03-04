import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDrcYjgpNe3edRBvP7plz5rvQex87T9GFg",
  authDomain: "react-crwn-db-cb69c.firebaseapp.com",
  projectId: "react-crwn-db-cb69c",
  storageBucket: "react-crwn-db-cb69c.appspot.com",
  messagingSenderId: "774530707087",
  appId: "1:774530707087:web:8509ef993191f46c590afa",
  measurementId: "G-8P5D3M7G64",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
