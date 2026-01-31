const { getAdminApp } = require('../app/lib/firebaseAdmin');

(async function(){
  try {
    const app = getAdminApp();
    if (!app) return console.error('Admin SDK not configured');
    const db = app.firestore();

    const vSnap = await db.collection('visitors').orderBy('createdAt','desc').limit(1).get();
    if (!vSnap.empty) {
      const d = vSnap.docs[0].data();
      console.log('Latest visitor:');
      console.log(JSON.stringify({ id: vSnap.docs[0].id, ...d }, null, 2));
    } else console.log('No visitors found');

    const m = await db.collection('monitor').doc('state').get();
    console.log('\nMonitor state:');
    if (m.exists) console.log(JSON.stringify(m.data(), null, 2)); else console.log('No monitor state');
  } catch (e) {
    console.error('Error reading Firestore:', e && e.message ? e.message : e);
  }
})();
