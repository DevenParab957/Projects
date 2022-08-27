import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiYReXtG3xZ1FBVvl9BU4Lngt50k0XXn4",
  authDomain: "fir-8dba5.firebaseapp.com",
  projectId: "fir-8dba5",
  storageBucket: "fir-8dba5.appspot.com",
  messagingSenderId: "814902793761",
  appId: "1:814902793761:web:240c519c9d2a2e02747560",
  measurementId: "G-6FYYPK7B7E"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};