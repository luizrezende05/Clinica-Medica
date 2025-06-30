import { Container, Typography } from '@mui/material';
import Header from '../components/Header';

const Admin = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Painel Administrativo
        </Typography>
        <Typography>
          Área restrita para administradores do sistema.
        </Typography>
      </Container>
    </>
  );
};

export default Admin;