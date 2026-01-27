import { NextResponse } from "next/server";
import { getAdminApp } from "../../lib/firebaseAdmin";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { idToken, tenant } = await req.json();
    if (!idToken) return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    const app = getAdminApp(tenant || "default");
    if (!app) {
      const hasRaw = !!process.env.FIREBASE_SERVICE_ACCOUNT || !!process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
      console.error(`/api/session error: Admin SDK not configured (tenant=${tenant || 'default'}). FIREBASE_SERVICE_ACCOUNT present: ${hasRaw}`);
      return NextResponse.json({ error: "Admin SDK not configured for tenant. Ensure FIREBASE_SERVICE_ACCOUNT env var is set (JSON string)." }, { status: 500 });
    }
    const adminSdk = app.auth();
    const decoded = await adminSdk.verifyIdToken(idToken);
    const uid = decoded.uid;

    // Check admin role in Firestore (use admin SDK firestore)
    const doc = await app.firestore().doc(`admins/${uid}`).get();
    if (!doc.exists) return NextResponse.json({ error: "Not an admin" }, { status: 403 });

    // Build cookie flags: in development do NOT set Secure (localhost http)
    const maxAge = 60 * 60 * 24;
    const isDev = process.env.NODE_ENV === "development";
    const sameSite = isDev ? "Lax" : "None";
    const secureFlag = isDev ? "" : "; Secure";
    const cookie = `admin_auth=true; Path=/; HttpOnly; SameSite=${sameSite}; Max-Age=${maxAge}${secureFlag}`;

    console.log(`/api/session POST: setting cookie (dev=${isDev}) for uid=${uid}`);
    const res = NextResponse.json({ ok: true });
    res.headers.set("Set-Cookie", cookie);
    // add simple debug header so client network tab can confirm server accepted
    res.headers.set("X-Session-Created", "1");
    return res;
  } catch (e) {
    console.error("/api/session error:", e);
    return NextResponse.json({ error: e.message || "Unauthorized" }, { status: 401 });
  }
}

export async function DELETE(req) {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const sameSite = isDev ? "Lax" : "None";
    const secureFlag = isDev ? "" : "; Secure";
    const cookie = `admin_auth=; Path=/; HttpOnly; SameSite=${sameSite}; Max-Age=0${secureFlag}`;
    console.log(`/api/session DELETE: clearing cookie (dev=${isDev})`);
    const res = NextResponse.json({ ok: true });
    res.headers.set("Set-Cookie", cookie);
    res.headers.set("X-Session-Deleted", "1");
    return res;
  } catch (e) {
    console.error("/api/session DELETE error:", e);
    return NextResponse.json({ error: e.message || "Error" }, { status: 500 });
  }
}
