import { NextResponse } from "next/server";
import admin, { getAdminApp } from "../../lib/firebaseAdmin";

export const runtime = "nodejs";

export async function GET() {
  try {
    const info = {
      nodeEnv: process.env.NODE_ENV || null,
      has_FIREBASE_SERVICE_ACCOUNT: !!process.env.FIREBASE_SERVICE_ACCOUNT,
      has_FIREBASE_SERVICE_ACCOUNT_BASE64: !!process.env.FIREBASE_SERVICE_ACCOUNT_BASE64,
      has_FIREBASE_SERVICE_ACCOUNT_TENANT_2: !!process.env.FIREBASE_SERVICE_ACCOUNT_TENANT_2,
      has_FIREBASE_SERVICE_ACCOUNT_TENANT_2_BASE64: !!process.env.FIREBASE_SERVICE_ACCOUNT_TENANT_2_BASE64,
      appsCount: Array.isArray(admin.apps) ? admin.apps.length : 0,
      adminAppAvailable: !!getAdminApp(),
    };

    console.log("/api/debug/admin-init:", info);
    return NextResponse.json({ ok: true, info });
  } catch (e) {
    console.error("/api/debug/admin-init error:", e);
    return NextResponse.json({ ok: false, error: e.message || String(e) }, { status: 500 });
  }
}
