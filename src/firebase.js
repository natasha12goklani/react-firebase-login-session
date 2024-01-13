// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6T9sVBWg6nkHsdwZS4_c4lvSlnv-GFh8",
  authDomain: "react-firebase-aa502.firebaseapp.com",
  projectId: "react-firebase-aa502",
  storageBucket: "react-firebase-aa502.appspot.com",
  messagingSenderId: "951947397007",
  appId: "1:951947397007:web:e80a0a4a637b0d9897edfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;