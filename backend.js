const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // يخدم كل ملفات public

// صفحة البداية
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// مسار شات AI
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if(!message) return res.json({ error: "لم يتم إدخال رسالة" });

  // مثال رد مؤقت
  const reply = `لقد استلمت رسالتك: "${message}"`;
  res.json({ reply });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
