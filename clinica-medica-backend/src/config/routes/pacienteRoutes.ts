import { Router } from 'express';
import { 
  criarPaciente, 
  listarPacientes, 
  buscarPacientePorId 
} from '../controllers/pacienteController';
import { autenticar } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', autenticar, criarPaciente);
router.get('/', autenticar, listarPacientes);
router.get('/:id', autenticar, buscarPacientePorId);

export default router;