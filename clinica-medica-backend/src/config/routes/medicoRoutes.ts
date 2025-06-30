import { Router } from 'express';
import { listarMedicos, criarMedico } from '../controllers/medicoController';
import { autenticar } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', autenticar, listarMedicos);
router.post('/', autenticar, criarMedico);

export default router;