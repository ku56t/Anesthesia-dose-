// backend.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // هنا توضع index.html وكل ملفات JS/CSS

// مثال endpoint للشات
app.post('/chat', (req, res) => {
  const { message } = req.body;

  // هنا ممكن تربط OpenAI أو Dialogflow لاحقاً
  // حالياً مجرد رد تجريبي
  if (!message) {
    return res.json({ error: "لم يتم إرسال أي رسالة" });
  }

  const reply = "رد تجريبي للذكاء الاصطناعي: " + message;
  res.json({ reply });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
