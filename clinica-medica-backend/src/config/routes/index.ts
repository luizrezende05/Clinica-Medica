// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './authRoutes';
import medicoRoutes from './medicoRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/medicos', medicoRoutes);

// Exportação deve ser DEFAULT
export default router;  // ← Esta linha é essencial