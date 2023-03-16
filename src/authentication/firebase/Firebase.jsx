import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRHIrsWfTip6fj6EsLihRfFeNQaddt6ak",
  authDomain: "sassy-nutronic.firebaseapp.com",
  projectId: "sassy-nutronic",
  storageBucket: "sassy-nutronic.appspot.com",
  messagingSenderId: "557307653515",
  appId: "1:557307653515:web:a38832315dfc17f1eb138e",
  measurementId: "G-ZHDZL44XS0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
