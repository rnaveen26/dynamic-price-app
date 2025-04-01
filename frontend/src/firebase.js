// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHWbTQ2_qEHWG5Ar3VhnCP5vSI-nagZ2U",
  authDomain: "dynamic-price-prediction-app.firebaseapp.com",
  projectId: "dynamic-price-prediction-app",
  storageBucket: "dynamic-price-prediction-app.firebasestorage.app",
  messagingSenderId: "716638999517",
  appId: "1:716638999517:web:b4ff7214337f0c541e5c34",
  measurementId: "G-KSQZ0TQS9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }