import { NextResponse } from "next/server";
import { getAdminApp } from "../../lib/firebaseAdmin";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { idToken, tenant } = await req.json();
    if (!idToken) return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    const app = getAdminApp(tenant || "default");
    if (!app) return NextResponse.json({ error: "Admin SDK not configured for tenant" }, { status: 500 });
    const adminSdk = app.auth();
    const decoded = await adminSdk.verifyIdToken(idToken);
    const uid = decoded.uid;

    // Check admin role in Firestore (use admin SDK firestore)
    const doc = await app.firestore().doc(`admins/${uid}`).get();
    if (!doc.exists) return NextResponse.json({ error: "Not an admin" }, { status: 403 });

    // Set secure HttpOnly cookie
    const cookie = `admin_auth=true; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${60 * 60 * 24}`;

    const res = NextResponse.json({ ok: true });
    res.headers.set("Set-Cookie", cookie);
    return res;
  } catch (e) {
    console.error("/api/session error:", e);
    return NextResponse.json({ error: e.message || "Unauthorized" }, { status: 401 });
  }
}
