// src/services/pacientes.ts
import api from './api';
import { Paciente } from '../types';

export const getPacientes = async (): Promise<Paciente[]> => {
  const response = await api.get('/pacientes');
  return response.data;
};

export const createPaciente = async (paciente: {
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
  data_nascimento?: string;
}) => {
  const response = await api.post('/pacientes', paciente);
  return response.data;
};