// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// // Configuration Firebase - À REMPLACER AVEC TES VRAIES CLÉS
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyD-exemple-exemple",
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ton-projet.firebaseapp.com",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ton-projet",
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ton-projet.appspot.com",
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
// };

// // Initialise Firebase seulement si ce n'est pas déjà fait
// let app;
// let db;
// let auth;
// let storage;

// try {
//   app = initializeApp(firebaseConfig);
//   db = getFirestore(app);
//   auth = getAuth(app);
//   storage = getStorage(app);
// } catch (error) {
//   // Si déjà initialisé (en développement avec Hot Reload)
//   if (!/already exists/.test(error.message)) {
//     console.error("Firebase initialization error", error.stack);
//   }
// }

// export { db, auth, storage };
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuration Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialiser Firebase seulement une fois
let app;
let db;
let auth;
let storage;

if (!getApps().length) {
  try {
    if (!firebaseConfig.apiKey) {
      console.error("Missing Firebase configuration. Make sure NEXT_PUBLIC_FIREBASE_* env vars are set.");
    }
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  app = getApps()[0];
  console.log("Using existing Firebase app");
}

try {
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
  console.log("Firebase services initialized");
} catch (error) {
  console.error("Firebase services initialization error:", error);
}

export { db, auth, storage };
export default app;