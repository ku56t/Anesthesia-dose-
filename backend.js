import express from "express";
import cors from "cors";
import path from "path";

import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
