import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// تحديد المسار الصحيح للجذر
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تقديم الملفات الثابتة
app.use(express.static(__dirname));

// شات AI وهمي
app.post("/chat", (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ error: "لا يوجد رسالة" });
  let reply = "الرد الفعلي يحتاج backend جاهز";
  res.json({ reply });
});

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
