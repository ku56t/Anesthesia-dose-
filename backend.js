import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// خدمة الملفات الثابتة (index.html + أي ملفات JS/CSS)
app.use(express.static(__dirname));

// نقطة النهاية للشات (تجريبية)
app.post("/chat", (req, res) => {
  const userMsg = req.body.message;
  const reply = "تم استلام رسالتك: " + userMsg;
  res.json({ reply });
});

// أي طلب آخر يرسل index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
