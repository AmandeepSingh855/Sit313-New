// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXfW0ae6blF2EzropgaSdH_kbJOEPGz4o",
  authDomain: "userauthentication-345cc.firebaseapp.com",
  projectId: "userauthentication-345cc",
  storageBucket: "userauthentication-345cc.firebasestorage.app",
  messagingSenderId: "473759178034",
  appId: "1:473759178034:web:8567ae48f52e2f5a15cb2b",
  measurementId: "G-NDKVWJBVD5"
};

const app = initializeApp(firebaseConfig);

// Export auth & firestore so we can use them in Login.js, Register.js, etc.
export const auth = getAuth(app);
export const db = getFirestore(app);
