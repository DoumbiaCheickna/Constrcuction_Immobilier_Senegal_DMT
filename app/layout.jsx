"use client";

import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { addVisitor, addEmailLog } from "./lib/firestoreService";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
      (async () => {
        // 1) write visitor (prefer server); fallback to client write on error
        let wrote = false;
        try {
          const res = await fetch('/api/visitors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: window.location.pathname }),
          });
          if (res && res.ok) wrote = true;
        } catch (e) {
          // ignore, we'll fallback
        }
        if (!wrote) {
          try { await addVisitor({ ip: "unknown", url: window.location.pathname }); wrote = true; } catch (e) { console.warn('client addVisitor failed', e); }
        }

        // 2) send EmailJS notification (client-side). Use safe dynamic import and retry once on failure.
        try {
          const mod = await import('emailjs-com');
          const emailjs = mod.default || mod;
          if (!emailjs || !emailjs.send) throw new Error('EmailJS module not available');
          const PUBLIC_KEY = 'EInZMJ5708HCaXepH';
          const SERVICE_ID = 'service_22qa9bf';
          const TEMPLATE_ID = 'template_vtey3vg';
          const now = new Date().toLocaleString();
          const payload = {
            to_name: 'Admin',
            to_email: 'cheicknadevdot@gmail.com',
            from_name: 'DMTC Construction Sénégal',
            subject: `Nouveau visiteur — DMTC Construction Sénégal`,
            url: window.location.pathname,
            time: now
          };

          async function trySend(attempt = 1) {
            try {
              // modern signature: send(serviceID, templateID, templateParams, publicKey)
              await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
              toast.success('Admin notifié par email');
              console.log('EmailJS sent');
              try { await addEmailLog({ type: 'emailjs_success', attempt, url: window.location.pathname, time: new Date().toISOString() }); } catch (e) { console.warn('addEmailLog failed', e); }
              return true;
            } catch (err) {
              console.warn(`EmailJS send failed (attempt ${attempt})`, err);
              // log failure to Firestore for debugging
              try { await addEmailLog({ type: 'emailjs_failure', attempt, error: (err && err.text) ? err.text : (err && err.message) ? err.message : String(err), url: window.location.pathname, time: new Date().toISOString() }); } catch (e) { console.warn('addEmailLog failed', e); }
              if (attempt < 2) {
                await new Promise(r => setTimeout(r, 2000));
                return trySend(attempt + 1);
              }
              toast.error('Échec notification email');
              return false;
            }
          }

          trySend();
        } catch (e) {
          console.warn('EmailJS load/send error', e);
        }
      })();
    }, []);

  return (
    <html lang="fr">
      <body>
        <Toaster position="top-right" />
        {children}
        {/* Test button to trigger EmailJS notification manually (hidden on homepage) */}
        {typeof window !== 'undefined' && window.location.pathname !== '/' && (
        <div className="fixed bottom-4 left-4 z-50">
          <button
            id="emailjs-test-btn"
            onClick={async () => {
              try {
                toast.loading('Envoi en cours...');
                const mod = await import('emailjs-com');
                const emailjs = mod.default || mod;
                const PUBLIC_KEY = 'EInZMJ5708HCaXepH';
                const SERVICE_ID = 'service_22qa9bf';
                const TEMPLATE_ID = 'template_vtey3vg';
                const payload = {
                  to_name: 'Admin',
                  to_email: 'cheicknadevdot@gmail.com',
                  from_name: 'DMTC Construction Sénégal',
                  subject: 'Test notification — visiteur',
                  url: window.location.pathname,
                  time: new Date().toLocaleString()
                };
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
                toast.dismiss();
                toast.success('Test EmailJS envoyé');
                try { await addEmailLog({ type: 'emailjs_manual_success', url: window.location.pathname, time: new Date().toISOString() }); } catch (e) { console.warn('addEmailLog failed', e); }
              } catch (err) {
                toast.dismiss();
                toast.error('Échec envoi EmailJS');
                console.warn('EmailJS manual send failed', err);
                try { await addEmailLog({ type: 'emailjs_manual_failure', error: (err && err.text) ? err.text : (err && err.message) ? err.message : String(err), url: window.location.pathname, time: new Date().toISOString() }); } catch (e) { console.warn('addEmailLog failed', e); }
              }
            }}
            className="px-3 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700"
          >
            Tester notification
          </button>
        </div>
        )}
      </body>
    </html>
  );
}
