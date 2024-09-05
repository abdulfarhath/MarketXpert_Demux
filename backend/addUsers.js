import admin from 'firebase-admin';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your service account key file
const serviceAccountPath = path.resolve(__dirname, 'path/to/your/serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

const auth = admin.auth();

// Array of users to be added
const users = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'password456' },
  { email: 'user3@example.com', password: 'password789' }
];

// Function to create users
const createUsers = async () => {
  try {
    for (const user of users) {
      const userRecord = await auth.createUser({
        email: user.email,
        password: user.password
      });
      console.log(`Successfully created new user: ${userRecord.uid}`);
    }
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
};

