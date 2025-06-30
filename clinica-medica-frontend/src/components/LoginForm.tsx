import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { login } from '../services/auth';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    senha: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.token);
      window.location.href = '/';
    } catch (error) {
      console.error('Login falhou:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={credentials.senha}
        onChange={(e) => setCredentials({...credentials, senha: e.target.value})}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;