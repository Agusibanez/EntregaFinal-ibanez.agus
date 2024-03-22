import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz5O3fgGgnPfLkxOILBMahKPpWLC9cx5E",
  authDomain: "bluebird-commerce.firebaseapp.com",
  projectId: "bluebird-commerce",
  storageBucket: "bluebird-commerce.appspot.com",
  messagingSenderId: "62205515247",
  appId: "1:62205515247:web:de9b297d0ae0b5cd80d21a",
  measurementId: "G-NEG9PZ1RZS",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
