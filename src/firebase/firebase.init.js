// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdKye4-C5bItI9tCfmroM4kFv5loIqIds",
  authDomain: "dimple-firebase-fb872.firebaseapp.com",
  projectId: "dimple-firebase-fb872",
  storageBucket: "dimple-firebase-fb872.firebasestorage.app",
  messagingSenderId: "541047178919",
  appId: "1:541047178919:web:0cf7f82885f6cf67b73d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);