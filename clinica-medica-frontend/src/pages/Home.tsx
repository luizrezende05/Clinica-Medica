import { Container, Typography } from '@mui/material';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao Sistema de Gestão da Clínica
        </Typography>
        <Typography>
          Utilize o menu para navegar entre as funcionalidades do sistema.
        </Typography>
      </Container>
    </>
  );
};

export default Home;