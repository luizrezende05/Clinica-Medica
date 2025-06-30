import api from './api';
import { Medico } from '../types';

export const getMedicos = async (): Promise<Medico[]> => {
  const response = await api.get('/medicos');
  return response.data;
};

export const createMedico = async (medico: {
  nome: string;
  especialidade: string;
  email: string;
  telefone: string;
}) => {
  const response = await api.post('/medicos', medico);
  return response.data;
};