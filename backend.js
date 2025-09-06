// backend.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // لو خليت الاندكس والـ assets بمجلد public

// مسار الجذر
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // تأكد أن index.html بجانب backend.js أو عدّل المسار
});

// مسار شات AI
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if(!message) return res.json({ error: "لم يتم إدخال رسالة" });

  try {
    // مثال رد ثابت قبل ربط AI حقيقي
    const reply = `لقد استلمت رسالتك: "${message}" - الرد سيأتي بعد ربط AI الفعلي.`;
    
    res.json({ reply });
  } catch(err) {
    console.error(err);
    res.json({ error: "حدث خطأ أثناء المعالجة" });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
