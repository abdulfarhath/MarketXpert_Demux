// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1GvAj7XfMj75dwpsDk1Sk5IC3rBOvODo",
  authDomain: "mentorxpert-61575.firebaseapp.com",
  projectId: "mentorxpert-61575",
  storageBucket: "mentorxpert-61575.appspot.com",
  messagingSenderId: "183773432870",
  appId: "1:183773432870:web:604854c6587f4cdef96ae7",
  measurementId: "G-ZPD7BQ6E7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
