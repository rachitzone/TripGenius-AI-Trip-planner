// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzfTagfP-1-ibUjegWK3VCaGZKaLjFyBU",
    authDomain: "tripgenius-27.firebaseapp.com",
    projectId: "tripgenius-27",
    storageBucket: "tripgenius-27.firebasestorage.app",
    messagingSenderId: "630273074217",
    appId: "1:630273074217:web:753b102d5a5937bdaf2838",
    measurementId: "G-CNCP4FDYZP"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Corrected function name
