// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY1PxLeYzNdL-mzV9x1cJzPIF66UNBqkg",
  authDomain: "swp-asp.firebaseapp.com",
  projectId: "swp-asp",
  storageBucket: "swp-asp.appspot.com",
  messagingSenderId: "840654227120",
  appId: "1:840654227120:web:f86f024ab8f4ad9e755d75",
  measurementId: "G-X2L1D29BGG",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const messaging = getMessaging();

async function requestPermission() {
  console.log("Requesting permission...");
  await Notification.requestPermission();
  return getKey();
}

const getKey = async () => {
  const token = await getToken(messaging, {
    vapidKey:
      "BOwbfM6evRixiJL4zQjwJifRjQAWYSApFfwAWRVR1zBwIOzGbblQNqJ495LcPlb-sPtNrn4QD3qQF3cCbuNhDuQ",
  });

  return token;
};

const listen = () => {
  console.log("listening");
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // ...
  });
};

export { requestPermission, listen };
