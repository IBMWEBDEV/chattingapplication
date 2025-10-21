// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9nOrl5bkhHOO_M8cICvakj6TQFdjOfZw",
  authDomain: "chattingapplication-be0b0.firebaseapp.com",
  projectId: "chattingapplication-be0b0",
  storageBucket: "chattingapplication-be0b0.firebasestorage.app",
  messagingSenderId: "806894685579",
  appId: "1:806894685579:web:bb8cee33dc133fce4bb38e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig