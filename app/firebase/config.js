

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDZHA0ne_E4x9CzK_E29j5_tOYAjTtrnrM",
  authDomain: "drop-iibs.firebaseapp.com",
  projectId: "drop-iibs",
  storageBucket: "drop-iibs.firebasestorage.app",
  messagingSenderId: "113120592091",
  appId: "1:113120592091:web:2586508f5323aeeefe0cfe",
  measurementId: "G-S6JHM7K801"
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
