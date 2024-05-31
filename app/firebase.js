// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp5uxXha25D29Nv1KjQ2b_I2aAne5Cqxo",
  authDomain: "healthbuddy-53d5b.firebaseapp.com",
  projectId: "healthbuddy-53d5b",
  storageBucket: "healthbuddy-53d5b.appspot.com",
  messagingSenderId: "868871197163",
  appId: "1:868871197163:web:24891b2e45c208bf8649ae"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
