import { useState } from 'react';
import {
  TextField, Button, MenuItem, Box, Alert, CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { cadastrarPaciente, cadastrarMedico } from '../services/auth';

const CadastroForm = () => {
  const [tipo, setTipo] = useState<'paciente' | 'medico'>('paciente');
  const [dados, setDados] = useState({ nome: '', email: '', senha: '', crm: '', cpf: '' });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro(null);
    try {
      if (tipo === 'medico') {
        await cadastrarMedico(dados);
      } else {
        await cadastrarPaciente(dados);
      }
      navigate('/login');
    } catch (err: any) {
      setErro(err?.message || 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {erro && <Alert severity="error">{erro}</Alert>}

      <TextField
        select
        fullWidth
        label="Tipo de usuário"
        value={tipo}
        onChange={(e) => setTipo(e.target.value as 'paciente' | 'medico')}
        margin="normal"
      >
        <MenuItem value="paciente">Paciente</MenuItem>
        <MenuItem value="medico">Médico</MenuItem>
      </TextField>

      <TextField
        fullWidth label="Nome" margin="normal" required
        value={dados.nome}
        onChange={(e) => setDados({ ...dados, nome: e.target.value })}
      />

      <TextField
        fullWidth label="Email" type="email" margin="normal" required
        value={dados.email}
        onChange={(e) => setDados({ ...dados, email: e.target.value })}
      />

      <TextField
        fullWidth label="Senha" type="password" margin="normal" required
        value={dados.senha}
        onChange={(e) => setDados({ ...dados, senha: e.target.value })}
      />

      {tipo === 'medico' && (
        <TextField
          fullWidth label="CRM" margin="normal" required
          value={dados.crm}
          onChange={(e) => setDados({ ...dados, crm: e.target.value })}
        />
      )}

      {tipo === 'paciente' && (
        <TextField
          fullWidth label="CPF" margin="normal" required
          value={dados.cpf}
          onChange={(e) => setDados({ ...dados, cpf: e.target.value })}
        />
      )}

      <Button
        fullWidth type="submit" variant="contained" sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Cadastrar'}
      </Button>
    </Box>
  );
};

export default CadastroForm;
