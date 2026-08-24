// api/contact.js
// Vercel Serverless Function — دریافت فرم مشاوره سایت آیسا و ارسال امن به تلگرام.
// توکن ربات تلگرام هرگز در کد سمت کاربر (فرانت‌اند) قرار نمی‌گیرد؛
// این فایل فقط روی سرور اجرا می‌شود و مقادیر حساس از Environment Variables خوانده می‌شوند.

module.exports = async function handler(req, res) {
  // فقط متد POST مجاز است
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, phone, service, message, website } = req.body || {};

    // --- Honeypot ضد اسپم ---
    // فیلد "website" در فرم واقعی مخفی است و کاربر انسانی هرگز آن را پر نمی‌کند.
    // اگر پر شده باشد یعنی احتمالاً یک ربات فرم را پر کرده — بی‌سروصدا رد می‌کنیم.
    if (website) {
      return res.status(200).json({ ok: true });
    }

    // --- اعتبارسنجی حداقلی ---
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ ok: false, error: "نام معتبر نیست" });
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return res.status(400).json({ ok: false, error: "شماره تماس معتبر نیست" });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set in environment variables.");
      return res.status(500).json({ ok: false, error: "Server not configured" });
    }

    const safe = (s) => (s || "—").toString().trim().slice(0, 800);

    const text =
      "🔔 *درخواست مشاوره جدید — سایت آیسا*\n\n" +
      `👤 *نام:* ${safe(name)}\n` +
      `📞 *تماس:* ${safe(phone)}\n` +
      `💉 *خدمت مورد نظر:* ${safe(service)}\n` +
      `📝 *توضیحات:* ${safe(message)}\n\n` +
      `🕒 ${new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" })}`;

    const tgResp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    const tgData = await tgResp.json();

    if (!tgData.ok) {
      console.error("Telegram API error:", tgData);
      return res.status(502).json({ ok: false, error: "ارسال به تلگرام ناموفق بود" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact.js error:", err);
    return res.status(500).json({ ok: false, error: "خطای سرور" });
  }
}
