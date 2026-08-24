// server.js
// سرور اصلی برای دیپلوی روی Render (به‌جای سرورلس‌فانکشن Vercel).
// این یک سرور Node همیشه-روشن است که هم فایل‌های استاتیک سایت
// (index.html, blog/, services/, images/, ...) و هم مسیر فرم مشاوره
// (POST /api/contact) را روی همین یک سرویس ارائه می‌دهد.
//
// عمداً بدون هیچ پکیج خارجی (مثل express) نوشته شده — فقط با ابزارهای
// داخلی خود Node.js — تا نصب روی Render ساده‌تر و مطمئن‌تر باشد.
//
// توکن ربات تلگرام هرگز در کد سمت کاربر (فرانت‌اند) قرار نمی‌گیرد؛
// فقط همینجا، روی سرور، از Environment Variables خوانده می‌شود.

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

function sendJSON(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    let size = 0;
    const MAX_SIZE = 100 * 1024; // 100KB — کافی برای فرم مشاوره
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_SIZE) {
        reject(new Error("Payload too large"));
        req.destroy();
        return;
      }
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

async function handleContact(req, res) {
  let body;
  try {
    body = await readRequestBody(req);
  } catch (e) {
    return sendJSON(res, 400, { ok: false, error: "درخواست نامعتبر است" });
  }

  const { name, phone, service, message, website } = body || {};

  // --- Honeypot ضد اسپم ---
  // فیلد "website" در فرم واقعی مخفی است و کاربر انسانی هرگز آن را پر نمی‌کند.
  if (website) {
    return sendJSON(res, 200, { ok: true });
  }

  // --- اعتبارسنجی حداقلی ---
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return sendJSON(res, 400, { ok: false, error: "نام معتبر نیست" });
  }
  if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
    return sendJSON(res, 400, { ok: false, error: "شماره تماس معتبر نیست" });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set in environment variables.");
    return sendJSON(res, 500, { ok: false, error: "Server not configured" });
  }

  const safe = (s) => (s || "—").toString().trim().slice(0, 800);

  const text =
    "🔔 *درخواست مشاوره جدید — سایت آیسا*\n\n" +
    `👤 *نام:* ${safe(name)}\n` +
    `📞 *تماس:* ${safe(phone)}\n` +
    `💉 *خدمت مورد نظر:* ${safe(service)}\n` +
    `📝 *توضیحات:* ${safe(message)}\n\n` +
    `🕒 ${new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" })}`;

  try {
    const tgResp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    });
    const tgData = await tgResp.json();

    if (!tgData.ok) {
      console.error("Telegram API error:", tgData);
      return sendJSON(res, 502, { ok: false, error: "ارسال به تلگرام ناموفق بود" });
    }
    return sendJSON(res, 200, { ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err);
    return sendJSON(res, 502, { ok: false, error: "ارسال به تلگرام ناموفق بود" });
  }
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  // جلوگیری از خروج از پوشه‌ی پروژه (Path Traversal)
  const safePath = path.normalize(path.join(ROOT, urlPath));
  if (!safePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(safePath, (err, stats) => {
    let finalPath = safePath;

    if (err || !stats || !stats.isFile()) {
      // اگر مسیر بدون پسوند بود (مثل /blog/botox) یک بار با .html امتحان کن
      const withHtml = safePath + ".html";
      if (fs.existsSync(withHtml)) {
        finalPath = withHtml;
      } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        return res.end("<h1>404 - صفحه پیدا نشد</h1>");
      }
    }

    const ext = path.extname(finalPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(finalPath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/contact") {
    return handleContact(req, res);
  }
  if (req.method === "GET" || req.method === "HEAD") {
    return serveStatic(req, res);
  }
  res.writeHead(405);
  res.end("Method Not Allowed");
});

server.listen(PORT, () => {
  console.log(`AISA site running on port ${PORT}`);
});
