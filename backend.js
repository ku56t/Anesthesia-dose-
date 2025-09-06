import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// للحصول على المسار الصحيح للملفات عند استخدام ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// سيرف صفحة الـ HTML عند زيارة /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// endpoint للشات
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  // هنا تحط الكود الفعلي للـ AI أو OpenAI
  res.json({ reply: `تم استلام الرسالة: ${message}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
