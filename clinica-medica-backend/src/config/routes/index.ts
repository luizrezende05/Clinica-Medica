import { Router } from 'express';
import authRoutes from './authRoutes';
import medicoRoutes from './medicoRoutes';
import express from 'express';
import pacienteRoutes from './pacienteRoutes';

const router = Router();

router.use('/medicos', medicoRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/auth', authRoutes);
router.use('/medicos', medicoRoutes);

export default router;  