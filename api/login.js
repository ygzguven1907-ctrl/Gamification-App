export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { user, pass } = req.body || {};
  if (user === process.env.AUTH_USER && pass === process.env.AUTH_PASS) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ ok: false });
}
