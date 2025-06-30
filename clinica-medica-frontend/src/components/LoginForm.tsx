import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, CircularProgress } from '@mui/material';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState<{ email?: string; senha?: string }>({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: { email?: string; senha?: string } = {};
    if (!credentials.email) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(credentials.email)) newErrors.email = 'Email inválido';
    if (!credentials.senha) newErrors.senha = 'Senha é obrigatória';
    else if (credentials.senha.length < 6) newErrors.senha = 'Senha deve ter ao menos 6 caracteres';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.token);
      navigate('/dashboard'); // rota protegida depois do login
    } catch (error: any) {
      setLoginError(error?.message || 'Falha no login. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>

      {loginError && <Alert severity="error" sx={{ mb: 2 }}>{loginError}</Alert>}

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
        autoComplete="email"
        autoFocus
        disabled={loading}
      />

      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={credentials.senha}
        onChange={(e) => setCredentials({ ...credentials, senha: e.target.value })}
        error={!!errors.senha}
        helperText={errors.senha}
        autoComplete="current-password"
        disabled={loading}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={loading} aria-busy={loading}>
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
      </Button>
    </Box>
  );
};

export default LoginForm;
