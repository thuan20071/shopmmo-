// Gửi mã quên mật khẩu qua Resend (miễn phí 100 mail/ngày).
// Trên Vercel: Settings > Environment Variables > thêm RESEND_API_KEY và FROM_EMAIL.
// Lấy key miễn phí tại resend.com. Khi chưa có key, API trả lỗi 501 và web sẽ hiện mã test.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, code } = req.body || {};
  if (!email || !code) return res.status(400).json({ error: 'Missing email/code' });
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(501).json({ error: 'RESEND_API_KEY not configured' });
  const from = process.env.FROM_EMAIL || 'THUAN MMO SHOP <onboarding@resend.dev>';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from, to: [email],
      subject: 'Mã đặt lại mật khẩu THUAN MMO SHOP',
      html: '<p>Mã của bạn: <b style="font-size:22px">' + code + '</b></p><p>Mã hiệu lực 15 phút. Không chia sẻ mã cho ai khác.</p>'
    })
  });
  if (!r.ok) return res.status(502).json({ error: 'Send failed' });
  return res.status(200).json({ ok: true });
}
