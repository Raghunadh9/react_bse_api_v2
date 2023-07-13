import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBgquEgE1HB1_VOHL3ChJGgDhLOvAfTCCM",
  authDomain: "bsestorage-75b05.firebaseapp.com",
  databaseURL: "https://bsestorage-75b05-default-rtdb.firebaseio.com",
  projectId: "bsestorage-75b05",
  storageBucket: "bsestorage-75b05.appspot.com",
  messagingSenderId: "920799084395",
  appId: "1:920799084395:web:7b3a6b9176b1473493162e",
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
