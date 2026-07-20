// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeosPHwx3AS__y6ip1QmSNrlbFL6D2-Tk",
  authDomain: "netflixgpt-b11dd.firebaseapp.com",
  projectId: "netflixgpt-b11dd",
  storageBucket: "netflixgpt-b11dd.firebasestorage.app",
  messagingSenderId: "711541847178",
  appId: "1:711541847178:web:b5f91201ca6b3225212973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth();