import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyyoU7WK4kSzSDkOH5Vi-vhT9yiTiiuMw",
  authDomain: "arpfrontpl3-reacttsredux.firebaseapp.com",
  projectId: "arpfrontpl3-reacttsredux",
  storageBucket: "arpfrontpl3-reacttsredux.appspot.com",
  messagingSenderId: "160575326018",
  appId: "1:160575326018:web:74e4db990cf767d90b2adb",
  measurementId: "G-TY34XQE7R6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
