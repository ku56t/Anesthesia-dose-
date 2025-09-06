// backend.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// ضروري لمعالجة __dirname في ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // يخدم ملفات public

// صفحة البداية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// مسار الشات
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ error: "لم يتم إدخال رسالة" });

  // مثال مؤقت للرد على الرسالة
  const reply = `لقد استلمت رسالتك: "${message}"`;
  res.json({ reply });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
