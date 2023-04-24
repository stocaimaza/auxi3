// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDpT4YsriJpZ5esF-feR8VcAJRMEIV2bo",
  authDomain: "marolio-6f689.firebaseapp.com",
  projectId: "marolio-6f689",
  storageBucket: "marolio-6f689.appspot.com",
  messagingSenderId: "69425841174",
  appId: "1:69425841174:web:195efb35342b3ac0bae137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);