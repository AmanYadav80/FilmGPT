// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOoCVXyxnDO1zlZj4_Qy1fF0J74nCXG80",
  authDomain: "netflixgpt-d3b9e.firebaseapp.com",
  projectId: "netflixgpt-d3b9e",
  storageBucket: "netflixgpt-d3b9e.appspot.com",
  messagingSenderId: "175744211192",
  appId: "1:175744211192:web:d3c3da439aadb416ed030d",
  measurementId: "G-DYN58LSYEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();