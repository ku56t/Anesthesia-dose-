// backend.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ error: "لم يتم إدخال رسالة" });
  const reply = `لقد استلمت رسالتك: "${message}"`;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
