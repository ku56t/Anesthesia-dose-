// backend.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// ES Modules: __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // يخدم كل الملفات من الجذر

// صفحة البداية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// مسار الشات
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ error: "لم يتم إدخال رسالة" });

  // مثال مؤقت للرد
  const reply = `لقد استلمت رسالتك: "${message}"`;
  res.json({ reply });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
