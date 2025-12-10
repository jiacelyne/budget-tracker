// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ADD THIS
import { getAuth } from "firebase/auth"; // ADD THIS

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9sKP9wg9OO8csn470scn0CdB-tR35hR8",
  authDomain: "kouri-60627.firebaseapp.com",
  projectId: "kouri-60627",
  storageBucket: "kouri-60627.firebasestorage.app",
  messagingSenderId: "856794673897",
  appId: "1:856794673897:web:cb0fee179b8b06e585b678",
  measurementId: "G-QNJD5QQ5X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // ADD THIS
export const auth = getAuth(app); // ADD THIS
