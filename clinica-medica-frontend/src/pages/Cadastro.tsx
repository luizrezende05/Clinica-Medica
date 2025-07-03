// src/pages/Cadastro.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import CadastroForm from '../components/CadastroForm';
import styled from 'styled-components';

const CadastroWrapper = styled(Box)`
  min-height: 100vh;
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(Box)`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Cadastro = () => (
  <CadastroWrapper>
    <Card>
      <Typography variant="h5" gutterBottom>
        Cadastro na Clínica Médica
      </Typography>
      <CadastroForm />
    </Card>
  </CadastroWrapper>
);

export default Cadastro;
