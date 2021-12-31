// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  getData,
  getDocs,
  addDoc,
  collection,
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
  signInWithPopup(auth, provider)
    .then((response) => {
      // console.log(response);
    })
    .catch((err) => console.log(err.message));
};

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await db.get(`users/${userAuth.uid}`);
  // const querySnapshot = await addDoc(collection(db, "users"), {
  //   name: userAuth.displayName,
  // });
  console.log(snapShot);

  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
};
