const express = require('express');
require('dotenv').config();
const admin = require('firebase-admin');
const firebase = require('firebase-admin');
const cors = require('cors');

// Initialize Firebase Admin SDK
const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : '',
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs"
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

const app = express();

// Allow specific origin for CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Initialize Firebase Auth
const firebaseAuth = firebase.auth();

// Function to check if user ID exists


// Function to add admin to Firestore
// Function to add admin to Firestore
async function addAdminToFirestore(adminData, res) {
    try {
        // Validate adminData
        console.log('Admin data:', adminData);
        if (!adminData  || !adminData.email) {
            
            res.status(400).send('Invalid input data');
            return;
        }

        // Create a new user with email and password
      let user=  await firebaseAuth.createUser({
            email: adminData.email,
            password: adminData.password
        });

        // Log the adminData for debugging
        console.log('Admin data:', adminData);

        // Add the admin to Firestore
        await admin.firestore().collection('admins').doc(user.uid).set({
            // firstName: adminData.firstname,
            // lastName: adminData.lastname,
            email: adminData.email,
            // phoneNumber: adminData.phonenumber
        });

        // Send success response
        res.status(200).send('Admin data saved successfully');
    } catch (error) {
        // Handle and log errors
        console.error('Error saving admin data:', error);
        res.status(500).send('Error saving admin data');
    }
}


// Express.js route to handle registration
app.post('/user/signup', (req, res) => {
    console.log('Received request body:', req.body);
    // Ensure the request body is not empty before processing
    if (!req.body) {
        res.status(400).send('Request body is empty');
        return;
    }
    // Add admin to Firestore
    addAdminToFirestore(req.body, res);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});