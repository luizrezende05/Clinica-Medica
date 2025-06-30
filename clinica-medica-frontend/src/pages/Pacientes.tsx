import { useState, useEffect } from 'react';
import { Container, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import PacienteList from '../components/PacienteList';
import { getPacientes } from '../services/pacientes';
import { Paciente } from '../types';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const data = await getPacientes();
      setPacientes(data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Pacientes
        </Typography>
        <PacienteList pacientes={pacientes} />
      </Container>
    </>
  );
};

export default Pacientes;