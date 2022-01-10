// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  onSnapshot,
  getData,
  getDoc,
  addDoc,
  doc,
  setDoc,
  collection,
  runTransaction,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkA7YGO-l0Wy6v1h9uA3lBb7Y32zPOALA",
  authDomain: "crwn-clothing-b72d6.firebaseapp.com",
  projectId: "crwn-clothing-b72d6",
  storageBucket: "crwn-clothing-b72d6.appspot.com",
  messagingSenderId: "1082793246805",
  appId: "1:1082793246805:web:8a93ebc1e482d71bd614dc",
};

// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () => {
  signInWithPopup(auth, provider).catch((err) => console.log(err.message));
};

const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, `users/${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await setDoc(docRef, {
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }

  return docRef;
};
