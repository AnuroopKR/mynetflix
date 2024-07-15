// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEbwTf2fvXROpP_dAeNsRojyk_8vQB0Hg",
  authDomain: "mynetflix-36648.firebaseapp.com",
  projectId: "mynetflix-36648",
  storageBucket: "mynetflix-36648.appspot.com",
  messagingSenderId: "130677194716",
  appId: "1:130677194716:web:6dbfc6b5ad7a1f4f7d1919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;
