// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLPPiFz3KxFfIR2-8WaZibJbcZVZWTxhI",
  authDomain: "chatgemini-c9e98.firebaseapp.com",
  projectId: "chatgemini-c9e98",
  storageBucket: "chatgemini-c9e98.appspot.com",
  messagingSenderId: "485633903629",
  appId: "1:485633903629:web:320cca2e8fd63035e6d944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "en";