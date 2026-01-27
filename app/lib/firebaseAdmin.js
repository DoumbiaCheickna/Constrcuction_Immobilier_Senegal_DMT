import admin from "firebase-admin";

function initAppFromEnv(raw, name) {
  if (!raw) return null;
  try {
    const serviceAccount = typeof raw === "string" ? JSON.parse(raw) : raw;
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    }, name || undefined);
    console.log(`Firebase Admin initialized for ${name || "default"}`);
    return app;
  } catch (e) {
    console.error(`Failed to initialize Firebase Admin ${name || "default"}:`, e && e.message ? e.message : e);
    return null;
  }
}

// Try default app first
let defaultApp = null;
const rawDefault = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
defaultApp = initAppFromEnv(rawDefault, undefined) || (admin.apps.length ? admin.apps[0] : null);

// Tenant 2 and 3 (optional)
let tenant2App = null;
let tenant3App = null;
const rawT2 = process.env.FIREBASE_SERVICE_ACCOUNT_TENANT_2;
const rawT3 = process.env.FIREBASE_SERVICE_ACCOUNT_TENANT_3;
tenant2App = initAppFromEnv(rawT2, "tenant2");
tenant3App = initAppFromEnv(rawT3, "tenant3");

export function getAdminApp(tenant = "default") {
  if (tenant === "tenant2" && tenant2App) return tenant2App;
  if (tenant === "tenant3" && tenant3App) return tenant3App;
  return defaultApp || (admin.apps.length ? admin.apps[0] : null);
}

export default admin;
