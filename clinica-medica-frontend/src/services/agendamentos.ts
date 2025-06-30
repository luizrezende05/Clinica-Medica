import api from './api';
import { Agendamento } from '../types';

export const getAgendamentos = async (): Promise<Agendamento[]> => {
  const response = await api.get('/agendamentos');
  return response.data;
};

export const createAgendamento = async (agendamento: {
  medico_id: number;
  paciente_id: number;
  data_hora: string;
}) => {
  const response = await api.post('/agendamentos', agendamento);
  return response.data;
};