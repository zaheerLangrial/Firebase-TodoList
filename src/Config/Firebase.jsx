import {getFirestore} from 'firebase/firestore'// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCszPjh8c8cpcUWZKImqbt_-8QqETrt6g0",
  authDomain: "fir-todolist-e46d3.firebaseapp.com",
  projectId: "fir-todolist-e46d3",
  storageBucket: "fir-todolist-e46d3.appspot.com",
  messagingSenderId: "1093478344409",
  appId: "1:1093478344409:web:ea8997ed2bf1479432c0c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)