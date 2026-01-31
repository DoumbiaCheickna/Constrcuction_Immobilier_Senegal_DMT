"use client";

import { useEffect } from "react";
import { addVisitor, addEmailLog } from "../lib/firestoreService";

export default function EmailjsAutoNotify() {
  useEffect(() => {
    (async () => {
      try {
        const cooldownMin = Number(process.env.NEXT_PUBLIC_MONITOR_COOLDOWN_MIN || 1);
        const key = 'dmtc_last_notify';
        const last = Number(localStorage.getItem(key) || 0);
        const now = Date.now();
        if (last && (now - last) < cooldownMin * 60 * 1000) return; // respect cooldown

        // 1) record visitor via server API, fallback to client write
        let wrote = false;
        try {
          const res = await fetch('/api/visitors', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: window.location.pathname }) });
          if (res && res.ok) wrote = true;
        } catch (e) {
          // ignore
        }
        if (!wrote) {
          try { await addVisitor({ ip: 'unknown', url: window.location.pathname }); wrote = true; } catch (e) { console.warn('client addVisitor failed', e); }
        }

        // 2) send EmailJS client notification
        try {
          const mod = await import('emailjs-com');
          const emailjs = mod.default || mod;
          const PUBLIC_KEY = 'EInZMJ5708HCaXepH';
          const SERVICE_ID = 'service_22qa9bf';
          const TEMPLATE_ID = 'template_vtey3vg';
          const payload = {
            to_name: 'Admin',
            to_email: 'cheicknadevdot@gmail.com',
            from_name: 'DMTC Construction Sénégal',
            subject: 'Nouveau visiteur — DMTC Construction Sénégal',
            url: window.location.pathname,
            time: new Date().toLocaleString()
          };
          await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
          try { await addEmailLog({ type: 'emailjs_auto_success', url: window.location.pathname, time: new Date().toISOString() }); } catch (e) { console.warn('addEmailLog failed', e); }
          localStorage.setItem(key, String(now));
        } catch (err) {
          console.warn('EmailJS auto send failed', err);
          try { await addEmailLog({ type: 'emailjs_auto_failure', error: (err && err.text) ? err.text : (err && err.message) ? err.message : String(err), url: window.location.pathname, time: new Date().toISOString() }); } catch (e) { console.warn('addEmailLog failed', e); }
        }
      } catch (e) {
        console.warn('EmailjsAutoNotify error', e);
      }
    })();
  }, []);

  return null;
}
