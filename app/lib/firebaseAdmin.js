import admin from "firebase-admin";
import fs from "fs";
import path from "path";

function parseServiceAccount(raw) {
  if (!raw) return null;
  try {
    if (typeof raw !== "string") return raw;
    return JSON.parse(raw);
  } catch (e) {
    // not JSON, return null
    return null;
  }
}

function tryInit(serviceAccountObj, name) {
  if (!serviceAccountObj) return null;
  try {
    // Avoid re-initializing an app with same name
    const existing = admin.apps.find(a => a.name === (name || "[DEFAULT]"));
    if (existing) {
      console.log(`Firebase Admin app already exists for ${name || 'default'}`);
      return existing;
    }
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccountObj),
    }, name || undefined);
    console.log(`Firebase Admin initialized for ${name || "default"}`);
    return app;
  } catch (e) {
    console.error(`Failed to initialize Firebase Admin ${name || "default"}:`, e && e.message ? e.message : e);
    return null;
  }
}

// Resolve possible sources for service account
function loadServiceAccountFromEnvOrFile(envVar, base64Var, filePath) {
  // 1) direct JSON in env
  const direct = process.env[envVar];
  const parsedDirect = parseServiceAccount(direct);
  if (parsedDirect) return parsedDirect;

  // 2) base64 encoded JSON
  const b64 = process.env[base64Var];
  if (b64) {
    try {
      const decoded = Buffer.from(b64, "base64").toString("utf8");
      const parsed = parseServiceAccount(decoded);
      if (parsed) return parsed;
    } catch (e) {
      console.error(`Failed to decode ${base64Var}:`, e && e.message ? e.message : e);
    }
  }

  // 3) local file fallback (development only)
  try {
    if (process.env.NODE_ENV === "development") {
      const full = path.resolve(process.cwd(), filePath || "serviceAccount.json");
      if (fs.existsSync(full)) {
        const raw = fs.readFileSync(full, { encoding: "utf8" });
        const parsed = parseServiceAccount(raw);
        if (parsed) return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading local service account file:", e && e.message ? e.message : e);
  }

  return null;
}

// Try default app first using multiple env var options
let defaultApp = null;
const defaultSA = loadServiceAccountFromEnvOrFile("FIREBASE_SERVICE_ACCOUNT", "FIREBASE_SERVICE_ACCOUNT_BASE64", "serviceAccount.json");
defaultApp = tryInit(defaultSA, undefined) || (admin.apps.length ? admin.apps[0] : null);

// Tenant 2 and 3 (optional)
let tenant2App = null;
let tenant3App = null;
const tenant2SA = loadServiceAccountFromEnvOrFile("FIREBASE_SERVICE_ACCOUNT_TENANT_2", "FIREBASE_SERVICE_ACCOUNT_TENANT_2_BASE64");
const tenant3SA = loadServiceAccountFromEnvOrFile("FIREBASE_SERVICE_ACCOUNT_TENANT_3", "FIREBASE_SERVICE_ACCOUNT_TENANT_3_BASE64");
tenant2App = tryInit(tenant2SA, "tenant2");
tenant3App = tryInit(tenant3SA, "tenant3");

export function getAdminApp(tenant = "default") {
  if (tenant === "tenant2" && tenant2App) return tenant2App;
  if (tenant === "tenant3" && tenant3App) return tenant3App;
  return defaultApp || (admin.apps.length ? admin.apps[0] : null);
}

export default admin;
