// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHOYmfZsU40Fv5F54AmRSgHcd_G-QDVlg",
  authDomain: "sifat-4e9bc.firebaseapp.com",
  projectId: "sifat-4e9bc",
  storageBucket: "sifat-4e9bc.appspot.com",
  messagingSenderId: "270524861277",
  appId: "1:270524861277:web:50d8535fd6a0c596c176b4",
  measurementId: "G-ZN94ZBPZMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
