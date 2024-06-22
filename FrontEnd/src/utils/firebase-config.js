// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgsn28NHzemx7ZrZ2UuHM0XCWdG5B4PMU",
  authDomain: "neflix-clone-jn1304.firebaseapp.com",
  projectId: "neflix-clone-jn1304",
  storageBucket: "neflix-clone-jn1304.appspot.com",
  messagingSenderId: "586728400923",
  appId: "1:586728400923:web:2043f4358b0ea99c2d70be",
  measurementId: "G-HZQZ1J6KTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
