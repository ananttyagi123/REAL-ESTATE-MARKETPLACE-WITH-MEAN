// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCxhpvOYbTKnsK_t478QvapUFQxRWCA9B0",
  authDomain: "mern-estate-596f0.firebaseapp.com",
  projectId: "mern-estate-596f0",
  storageBucket: "mern-estate-596f0.appspot.com",
  messagingSenderId: "310066152351",
  appId: "1:310066152351:web:786b135aabcc87167a73aa",
  measurementId: "G-1PW5F303PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
