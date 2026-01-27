import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    if (raw) {
      const serviceAccount = typeof raw === "string" ? JSON.parse(raw) : raw;
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("Firebase Admin initialized with service account");
    } else {
      // Fall back to default credentials (not recommended for production)
      admin.initializeApp();
      console.log("Firebase Admin initialized with default credentials");
    }
  } catch (e) {
    // Fail loudly in server logs
    console.error("Failed to initialize Firebase Admin:", e && e.message ? e.message : e);
  }
}

export default admin;
