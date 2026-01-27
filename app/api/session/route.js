import { NextResponse } from "next/server";
import admin from "../../lib/firebaseAdmin";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { idToken } = await req.json();
    if (!idToken) return NextResponse.json({ error: "Missing idToken" }, { status: 400 });

    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    // Check admin role in Firestore
    const doc = await admin.firestore().doc(`admins/${uid}`).get();
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
