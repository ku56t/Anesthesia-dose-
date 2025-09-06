import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

// استخدم مفتاح OpenAI من Environment Variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// نقطة نهاية للشات AI
app.post("/ai", async (req, res) => {
  const { message } = req.body;
  if(!message) return res.json({ reply: "الرجاء كتابة رسالة." });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    });
    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.json({ reply: "حدث خطأ. يرجى المحاولة لاحقًا." });
  }
});

// تشغيل السيرفر على البورت الذي يحدده Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
