// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9P2K5l-citnB-OBKAUszU1Gar8O1gro",
  authDomain: "youth-parliament-society.firebaseapp.com",
  projectId: "youth-parliament-society",
  storageBucket: "youth-parliament-society.firebasestorage.app",
  messagingSenderId: "859177307296",
  appId: "1:859177307296:web:ee325979a562c5157ecdc5",
  measurementId: "G-S5MW5S4BDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };