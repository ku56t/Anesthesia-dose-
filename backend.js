// backend.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // هذا لتقديم index.html من مجلد public

// شات AI وهمي
app.post("/chat", (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ error: "لا يوجد رسالة" });

  // مثال للردود الوهمية
  let reply = "الرد الفعلي يحتاج backend جاهز";
  if (message.includes("جرعة")) reply = "يتم حساب الجرعة تلقائيًا بعد إدخال الوزن والعمر";
  if (message.includes("سوائل")) reply = "حساب السوائل والدم جاري";

  res.json({ reply });
});

// Health check
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
