import React from 'react';
import { Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const LoginWrapper = styled(Box)`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LoginCard = styled(Box)`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  width: 100%;
  max-width: 420px;
  text-align: center;
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 24px;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginCard>
        <Logo src="/logo-clinica.png" alt="Logo da Clínica" />
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: '#2c3e50',
            fontWeight: 700,
            mb: 4,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Bem-vindo(a) à Clínica Médica
        </Typography>
        <LoginForm />
      </LoginCard>
    </LoginWrapper>
  );
};

export default Login;
