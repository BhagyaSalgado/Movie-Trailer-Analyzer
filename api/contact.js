// Vercel serverless function: receives the contact form and emails it via Resend.
// Required environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  – API key from https://resend.com
//   CONTACT_TO      – inbox that receives messages (e.g. aimovieanalyzer@gmail.com)
// Optional:
//   CONTACT_FROM    – sender address; defaults to Resend's test sender

const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const message = (body.message || '').trim();

  // Honeypot field: real visitors never fill it in.
  if (body.website) return res.status(200).json({ ok: true });

  if (!name || !email || !message) return res.status(400).json({ error: 'Please fill in all fields.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (name.length > 200 || message.length > 5000) return res.status(400).json({ error: 'Message is too long.' });

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO) return res.status(500).json({ error: 'Contact form is not configured yet.' });

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM || 'R26-IT-142 Website <onboarding@resend.dev>',
      to: [CONTACT_TO],
      reply_to: email,
      subject: `Website message from ${name}`,
      html: `<p><b>Name:</b> ${escape(name)}</p><p><b>Email:</b> ${escape(email)}</p><p><b>Message:</b></p><p>${escape(message).replace(/\n/g, '<br>')}</p>`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    })
  });

  if (!r.ok) {
    console.error('Resend error', r.status, await r.text());
    return res.status(502).json({ error: 'Could not send your message. Please email us directly.' });
  }
  return res.status(200).json({ ok: true });
};
