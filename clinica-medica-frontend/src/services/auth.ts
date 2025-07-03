import api from './api';
export const cadastrarPaciente = async (dados: any) => {
  return api.post('/pacientes', dados);
};

export const cadastrarMedico = async (dados: any) => {
  return api.post('/medicos', dados);
};

export const login = async (credentials: { email: string; senha: string }) => {
  const response = await api.post('/auth/login', credentials);
  return response.data; // espera { token: string }
};
