import api from './api';

export const login = async (credentials: { email: string; senha: string }) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};