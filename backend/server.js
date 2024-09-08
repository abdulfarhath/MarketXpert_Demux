const express = require('express');
require('dotenv').config();
const admin = require('firebase-admin');
const firebase = require('firebase-admin');
const cors = require('cors');
require('firebase/auth');

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

async function addAdminToFirestore(adminData, res) {
    try {
        // Validate adminData
        console.log('Admin data:', adminData);
        if (!adminData || !adminData.email) {
            res.status(400).send('Invalid input data');
            return;
        }

        // Create a new user with email and password
        let user = await firebaseAuth.createUser({
            email: adminData.email,
            password: adminData.password
        });

        // Add the admin to Firestore
        await admin.firestore().collection('admins').doc(user.uid).set({
            email: adminData.email
        });
        await initializeUserSubcollections(user.uid);

        // Send success response
        res.status(200).send({ message: 'Admin data saved successfully', uid: user.uid });
    } catch (error) {
        // Handle and log errors
        console.error('Error saving admin data:', error);
        res.status(500).send('Error saving admin data');
    }
}

// Signin function for admin



async function loginUser(email, password) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      // Handle the user information or send token to server
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  }

// Express.js route to handle registration
app.post('/admin/signup', (req, res) => {
    console.log('Received request body:', req.body);
    if (!req.body) {
        res.status(400).send('Request body is empty');
        return;
    }
    addAdminToFirestore(req.body, res);
});

// Express.js route to handle signin
app.post('/admin/signin', (req, res) => {
   loginUser(req.body.email, req.body.password);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





































// app.post('/admin/add-product', async (req, res) => {
//     try {
//         const { uid, pimg, pname, pid, pcost } = req.body;

//         // Reference to the admin's products subcollection
//         const productsRef = admin.firestore().collection('admins').doc(uid).collection('products');

//         // Add a new product to the subcollection
//         const newProductRef = await productsRef.add({
//             pimg, 
//             pname,
//             pid,
//             pcost, 
//             createdAt: admin.firestore.FieldValue.serverTimestamp(),
//         });

//         // Update total revenue
//         await updateTotalRevenue(uid);

//         res.status(201).json({ message: 'Product added successfully', productId: newProductRef.id });
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ message: 'Failed to add product', error: error.message });
//     }
// });

// async function updateTotalRevenue(adminId) {
//     try {
//         const productsRef = admin.firestore().collection('admins').doc(adminId).collection('products');
//         const productsSnapshot = await productsRef.get();
        
//         if (productsSnapshot.empty) {
//             console.log('No products found.');
//             await admin.firestore().collection('admins').doc(adminId).update({
//                 totalRevenue: 0
//             });
//             return;
//         }

//         let totalRevenue = 0;
//         productsSnapshot.forEach(doc => {
//             const productData = doc.data();
//             if (productData.pcost) {
//                 totalRevenue += productData.pcost;
//             }
//         });

//         await admin.firestore().collection('admins').doc(adminId).update({
//             totalRevenue
//         });

//         console.log(`Total revenue updated for admin ${adminId}: ${totalRevenue}`);
//     } catch (error) {
//         console.error('Error updating total revenue:', error);
//         throw new Error('Error updating total revenue');
//     }
// }

// async function initializeUserSubcollections(uid) {
//     try {
//         const db = admin.firestore();
//         // Initialize 'products' subcollection with a default document
//         await db.collection('admins').doc(uid).collection('products').doc('default-product').set({
//             pname: 'Default Product',
//             pcost: 0,
//             pimg: 'default-image-url',
//             createdAt: admin.firestore.FieldValue.serverTimestamp(),
//         });

//         // Initialize 'revenue' subcollection with a default document
//         await db.collection('admins').doc(uid).collection('revenue').doc('initial-revenue').set({
//             amount: 0,
//             description: 'Initial Revenue',
//             timestamp: admin.firestore.FieldValue.serverTimestamp(),
//         });

//         console.log('Subcollections initialized successfully');
//     } catch (error) {
//         console.error('Error initializing subcollections:', error);
//         throw error;
//     }
// }

// app.get('/admin/get-products', async (req, res) => {
//     try {
//         const { uid } = req.query;
//         if (!uid) {
//             return res.status(401).json({ message: 'Admin not authenticated' });
//         }

//         const productsRef = admin.firestore().collection('admins').doc(uid).collection('products');
//         const snapshot = await productsRef.get();

//         if (snapshot.empty) {
//             return res.status(404).json({ message: 'No products found' });
//         }

//         const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//         res.status(200).json({ products });
//     } catch (error) {
//         console.error('Error retrieving products:', error);
//         res.status(500).json({ message: 'Failed to retrieve products', error: error.message });
//     }
// });

// app.get('/admin/total-revenue', async (req, res) => {
//     try {
//         const { uid } = req.query;
//         if (!uid) {
//             return res.status(400).json({ message: 'Admin ID is required' });
//         }

//         const totalRevenue = await calculateTotalRevenue(uid);

//         res.status(200).json({ totalRevenue });
//     } catch (error) {
//         console.error('Error retrieving total revenue:', error);
//         res.status(500).json({ message: 'Failed to retrieve total revenue', error: error.message });
//     }
// });

// async function calculateTotalRevenue(adminId) {
//     try {
//         const productsRef = admin.firestore().collection('admins').doc(adminId).collection('products');
//         const productsSnapshot = await productsRef.get();
        
//         if (productsSnapshot.empty) {
//             console.log('No products found.');
//             return 0; // No products means no revenue
//         }

//         let totalRevenue = 0;
//         productsSnapshot.forEach(doc => {
//             const productData = doc.data();
//             if (productData.pcost) {
//                 totalRevenue += productData.pcost;
//             }
//         });

//         return totalRevenue;
//     } catch (error) {
//         console.error('Error calculating total revenue:', error);
//         throw new Error('Error calculating total revenue');
//     }
// }
