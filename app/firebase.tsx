// firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
 // Import the Auth module
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyBNSZNA-BUlgQWaVWrPFJdUwe7LwF9KpFg",
  authDomain: "react-to-do-app-4d18e.firebaseapp.com",
  projectId: "react-to-do-app-4d18e",
  storageBucket: "react-to-do-app-4d18e.appspot.com",
  messagingSenderId: "842841854748",
  appId: "1:842841854748:web:81e0e1431d4818d7faa0d9",
  measurementId: "G-DMWHBZL4CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth

// Initialize Firestore

const firestore = getFirestore(app);
export {  firestore }; // Export auth and firestore
