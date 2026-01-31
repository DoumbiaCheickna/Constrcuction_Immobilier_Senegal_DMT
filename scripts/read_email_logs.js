const { getAdminApp } = require('../app/lib/firebaseAdmin');

(async function(){
  try {
    const app = getAdminApp();
    if (!app) return console.error('Admin SDK not configured');
    const db = app.firestore();

    const snap = await db.collection('emailLogs').orderBy('createdAt','desc').limit(10).get();
    if (snap.empty) return console.log('No emailLogs found');
    console.log('Last emailLogs:');
    snap.docs.forEach(d => console.log(JSON.stringify({ id: d.id, ...d.data() }, null, 2)));
  } catch (e) {
    console.error('Error reading emailLogs:', e && e.message ? e.message : e);
  }
})();
