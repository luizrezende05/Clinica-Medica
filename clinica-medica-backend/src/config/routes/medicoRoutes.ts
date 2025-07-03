import { Router } from 'express';
import { listarMedicos, criarMedico } from '../controllers/medicoController';
import { autenticar } from '../middlewares/authMiddleware';


const router = Router();

router.post('/', criarMedico);
router.get('/', autenticar, listarMedicos);
router.post('/', autenticar, criarMedico);

export default router;