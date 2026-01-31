const fetch = global.fetch || require('node-fetch');

async function sendTest() {
  const url = 'https://api.emailjs.com/api/v1.0/email/send';
  const body = {
    service_id: 'service_22qa9bf',
    template_id: 'template_vtey3vg',
    user_id: 'EInZMJ5708HCaXepH',
    template_params: {
      to_name: 'Admin',
      to_email: 'cheicknadevdot@gmail.com',
      from_name: 'DMTC Construction Sénégal',
      subject: 'Test EmailJS — visiteur',
      url: '/test-send-emailjs',
      time: new Date().toLocaleString()
    }
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    console.log('STATUS', res.status);
    console.log('BODY', text);
  } catch (e) {
    console.error('Error sending EmailJS request:', e && e.message ? e.message : e);
  }
}

sendTest();
