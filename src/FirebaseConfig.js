// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwdnFAYa8Hum8DuBLgvMt1AToHK19uY9k",
  authDomain: "codewithvetriapi-c56e3.firebaseapp.com",
  databaseURL: "https://codewithvetriapi-c56e3-default-rtdb.firebaseio.com",
  projectId: "codewithvetriapi-c56e3",
  storageBucket: "codewithvetriapi-c56e3.appspot.com",
  messagingSenderId: "266256676811",
  appId: "1:266256676811:web:2217047e4f7ed2145f684e",
  measurementId: "G-B9HLMNTMD6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
