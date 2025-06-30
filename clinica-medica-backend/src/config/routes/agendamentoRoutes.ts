import { Router } from 'express';
import { 
  criarAgendamento, 
  listarAgendamentos,
  atualizarStatus
} from '../controllers/agendamentoController';
import { autenticar } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', autenticar, criarAgendamento);
router.get('/', autenticar, listarAgendamentos);
router.patch('/:id/status', autenticar, atualizarStatus);

export default router;