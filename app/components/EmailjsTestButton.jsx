"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { addEmailLog } from "../lib/firestoreService";

export default function EmailjsTestButton() {
  const [sending, setSending] = useState(false);

  async function handleClick() {
    setSending(true);
    toast.loading('Envoi en cours...');
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
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <div style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 9999 }}>
        <button onClick={handleClick} disabled={sending} className="px-3 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700">
          {sending ? 'Envoi...' : 'Tester notification'}
        </button>
      </div>
    </>
  );
}
