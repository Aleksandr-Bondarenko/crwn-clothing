import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBkA7YGO-l0Wy6v1h9uA3lBb7Y32zPOALA",
  authDomain: "crwn-clothing-b72d6.firebaseapp.com",
  projectId: "crwn-clothing-b72d6",
  storageBucket: "crwn-clothing-b72d6.appspot.com",
  messagingSenderId: "1082793246805",
  appId: "1:1082793246805:web:8a93ebc1e482d71bd614dc",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select-account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
