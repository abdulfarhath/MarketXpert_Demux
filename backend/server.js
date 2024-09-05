import express from "express";
import env from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Initialize dotenv to access environment variables
env.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const port = process.env.PORT || 3000;

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID // Ensure this is included
};

// Log Firebase configuration for debugging
console.log('Firebase Configuration:', firebaseConfig);

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// User signup route
app.post('/user/signup', async (req, res) => {
  console.log("Received POST request for user signup");
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(201).send(`User signed up successfully: ${user.email}`);
  } catch (error) {
    console.error('Error signing up user:', error.message);
    res.status(400).send(`Error signing up user: ${error.message}`);
  }
});

// User login route
app.post('/user/login', async (req, res) => {
  console.log("Received POST request for user login");
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).send(`User logged in successfully: ${user.email}`);
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(400).send(`Error logging in user: ${error.message}`);
  }
});

// Root route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`MarketXtreme listening on port ${port}`);
});
