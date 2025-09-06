// backend.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// خدمة الملفات الثابتة (HTML, JS, CSS)
app.use(express.static("public"));

// شات AI وهمي (يمكن ربط OpenAI لاحقاً)
app.post("/chat", (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ error: "لا يوجد رسالة" });

  // هنا يمكنك ربط OpenAI أو أي AI آخر
  const reply = `الرد على: "${message}" (مثال)`;
  res.json({ reply });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
