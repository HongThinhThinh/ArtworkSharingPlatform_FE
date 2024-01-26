// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfHib3hMFlPKCk5AgNM1Hv-DUAwEaNc6A",
  authDomain: "artworksharingplatform.firebaseapp.com",
  projectId: "artworksharingplatform",
  storageBucket: "artworksharingplatform.appspot.com",
  messagingSenderId: "382239362017",
  appId: "1:382239362017:web:939362cd4f473fe703a0a0",
  measurementId: "G-584HQ837YF",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
