import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes'; // Caminho corrigido

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', router); // Prefixo para todas as rotas

// Configuração da porta
const PORT = process.env.PORT || 5000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando na porta ${PORT}`);
});