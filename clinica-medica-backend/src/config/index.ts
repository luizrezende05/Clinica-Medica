import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes'; 
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando na porta ${PORT}`);
});