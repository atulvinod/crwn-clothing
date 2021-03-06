import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect as gSignInRedirect,
  getRedirectResult as gRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOqurrKCLfnz-gV9ItJfPdhpiu5Wj9XLk",
  authDomain: "crwn-clothing-b9df2.firebaseapp.com",
  projectId: "crwn-clothing-b9df2",
  storageBucket: "crwn-clothing-b9df2.appspot.com",
  messagingSenderId: "199746788477",
  appId: "1:199746788477:web:0fe4241aef75229e39e514",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//The authentication state is persisted between refreshes as firebase listens to the auth state 
//stored in the remote instance
export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signInWithRedirect = () => gSignInRedirect(auth, provider);

export const getRedirectResult = () => gRedirectResult(auth);

export const signUpWithEmailPassword = (email, password) => {
  if (!email || !password) return null;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailPassword = (email, password) => {
  if (!email || !password) return null;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
