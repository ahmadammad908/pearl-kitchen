import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg2FPjHQ6p6G9ZWeGrm2nOYSZnssl36l0",
  authDomain: "pearl-burgers.firebaseapp.com",
  projectId: "pearl-burgers",
  storageBucket: "pearl-burgers.appspot.com",
  messagingSenderId: "838712971901",
  appId: "1:838712971901:web:0e9de683ad7e8e10779714",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
