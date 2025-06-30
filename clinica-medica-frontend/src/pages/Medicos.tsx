import { useState, useEffect } from 'react';
import { Container, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import MedicoList from '../components/MedicoList';
import MedicoForm from '../components/MedicoForm';
import { getMedicos } from '../services/medicos';
import { Medico } from '../types';

const Medicos = () => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    fetchMedicos();
  }, []);

  const fetchMedicos = async () => {
    try {
      const data = await getMedicos();
      setMedicos(data);
    } catch (error) {
      console.error('Erro ao buscar médicos:', error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Médicos
        </Typography>
        <Button variant="contained" onClick={() => setOpenForm(true)}>
          Adicionar Médico
        </Button>
        <MedicoList medicos={medicos} />
        <MedicoForm
          open={openForm}
          onClose={() => setOpenForm(false)}
          onSuccess={fetchMedicos}
        />
      </Container>
    </>
  );
};

export default Medicos;