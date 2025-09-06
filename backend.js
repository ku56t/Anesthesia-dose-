import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// هنا نحدد المسار الصحيح للـ index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // ضع index.html في نفس مجلد backend.js
});

// نقطة النهاية للشات
app.post("/chat", (req, res) => {
  const { message } = req.body;
  // مثال رد وهمي
  res.json({ reply: "تم استقبال الرسالة: " + message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
