import { NextResponse } from "next/server";
import { getAdminApp, default as admin } from "../../lib/firebaseAdmin";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getIpFromReq(req) {
  const xff = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
  if (xff) return xff.split(",")[0].trim();
  // Next.js Request may not expose socket; fallback
  return "unknown";
}

export async function POST(req) {
  try {
    const app = getAdminApp();
    if (!app) return NextResponse.json({ error: "Admin SDK not configured" }, { status: 500 });

    const body = await req.json().catch(() => ({}));
    const url = (body && typeof body.url === "string") ? body.url : "/";
    const userAgent = req.headers.get("user-agent") || "";
    const referrer = req.headers.get("referer") || "";
    const ip = getIpFromReq(req);

    const db = app.firestore();
    // store visitor with server timestamp
    await db.collection("visitors").add({ ip, url, userAgent, referrer, createdAt: admin.firestore.FieldValue.serverTimestamp() });

    // Notification settings
    const to = process.env.MONITOR_EMAIL_TO;
    const host = process.env.MAIL_SMTP_HOST;
    const port = process.env.MAIL_SMTP_PORT;
    const user = process.env.MAIL_SMTP_USER;
    const pass = process.env.MAIL_SMTP_PASS;
    const secure = process.env.MAIL_SMTP_SECURE === "true";
    const cooldownMin = Number(process.env.MONITOR_COOLDOWN_MIN || 1);

    // avoid spamming emails: check last notification timestamp
    let shouldSend = !!(to && host && port && user && pass);
    if (shouldSend) {
      try {
        const stateRef = db.collection('monitor').doc('state');
        const stateSnap = await stateRef.get();
        if (stateSnap.exists) {
          const data = stateSnap.data();
          const last = data?.lastNotification?.toDate ? data.lastNotification.toDate() : (data?.lastNotification ? new Date(data.lastNotification) : null);
          if (last) {
            const age = Date.now() - last.getTime();
            if (age < cooldownMin * 60 * 1000) {
              shouldSend = false; // within cooldown
            }
          }
        }
      } catch (e) {
        console.error('monitor state read failed', e && e.message ? e.message : e);
      }
    }

    if (shouldSend) {
      try {
        const transporter = nodemailer.createTransport({ host, port: Number(port), secure: !!secure, auth: { user, pass } });

        const now = new Date();
          const siteName = process.env.SITE_NAME || 'DMTC Construction Sénégal';
          const subject = `Nouveau visiteur — ${siteName} — ${now.toLocaleString()}`;
          const adminLink = process.env.SITE_ADMIN_URL || 'http://localhost:3000/admin/visitors';
          const plainText = `Nouveau visiteur sur ${siteName}\nURL: ${url}\nIP: ${ip}\nHeure: ${now.toLocaleString()}\nConsultez: ${adminLink}`;
          const html = `
            <div style="font-family:Arial,Helvetica,sans-serif;color:#111">
              <h2 style="color:#0b5cff;margin:0 0 8px">Nouveau visiteur — ${siteName}</h2>
              <p>Bonjour,</p>
              <p>Un visiteur a accédé au site <strong>${siteName}</strong>. Détails :</p>
              <table style="border-collapse:collapse;margin:8px 0">
                <tr><td style="padding:6px 10px;font-weight:600">URL:</td><td style="padding:6px 10px">${url}</td></tr>
                <tr><td style="padding:6px 10px;font-weight:600">IP:</td><td style="padding:6px 10px">${ip}</td></tr>
                <tr><td style="padding:6px 10px;font-weight:600">Navigateur:</td><td style="padding:6px 10px">${userAgent}</td></tr>
                <tr><td style="padding:6px 10px;font-weight:600">Réferrer:</td><td style="padding:6px 10px">${referrer}</td></tr>
                <tr><td style="padding:6px 10px;font-weight:600">Heure:</td><td style="padding:6px 10px">${now.toLocaleString()}</td></tr>
              </table>
              <p style="margin-top:12px">
                <a href="${adminLink}" style="display:inline-block;padding:10px 14px;background:#0b5cff;color:#fff;border-radius:6px;text-decoration:none">Ouvrir l'administration</a>
              </p>
              <p style="color:#666;font-size:12px;margin-top:8px">Pour désactiver ces notifications, mettez à jour la variable d'environnement <strong>MONITOR_EMAIL_TO</strong>.</p>
            </div>
          `;

          await transporter.sendMail({ from: process.env.MAIL_FROM || user, to, subject, text: plainText, html });

        // update lastNotification timestamp
        try { await db.collection('monitor').doc('state').set({ lastNotification: admin.firestore.FieldValue.serverTimestamp() }, { merge: true }); } catch (e) { console.error('failed to update monitor state', e && e.message ? e.message : e); }
      } catch (e) {
        console.error("Failed to send notification email:", e && e.message ? e.message : e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("/api/visitors error:", e && e.message ? e.message : e);
    return NextResponse.json({ error: e.message || "Error" }, { status: 500 });
  }
}
