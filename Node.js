// backend.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // هنا توضع index.html وكل ملفات JS/CSS

// Endpoint للشات مع الذكاء الاصطناعي
app.post('/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({ error: "لم يتم إرسال أي رسالة" });
  }

  // رد تجريبي، لاحقاً ممكن تربط OpenAI أو Dialogflow
  const reply = "الرد التجريبي للذكاء الاصطناعي: " + message;
  res.json({ reply });
});

// Endpoint إضافي لحساب الجرعات (مثال)
app.post('/dose', (req, res) => {
  const { weight, drug } = req.body;
  if (!weight || !drug) {
    return res.json({ error: "الوزن أو اسم الدواء مفقود" });
  }

  const drugsData = {
    propofol: 2,
    midazolam: 0.1,
    fentanyl: 0.001,
    ketamine: 1.5
  };

  const dosePerKg = drugsData[drug];
  if (!dosePerKg) return res.json({ error: "الدواء غير موجود" });

  const dose = weight * dosePerKg;
  res.json({ dose });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
