// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADPNamIVS-1HmgWCYb7QK5wmyIMnax-WY",
  authDomain: "teletubbie-project.firebaseapp.com",
  projectId: "teletubbie-project",
  storageBucket: "teletubbie-project.appspot.com",
  messagingSenderId: "941444811716",
  appId: "1:941444811716:web:4ad7a617bb7146ca0eb291",
  measurementId: "G-CKQ9DBX3R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const nalytics = getAnalytics(app);
export const db = getFirestore(app);
// export  analytics =  {};


