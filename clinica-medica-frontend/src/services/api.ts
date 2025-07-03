import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // ajuste conforme o endereço do seu backend
});

export default api;
