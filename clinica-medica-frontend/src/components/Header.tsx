import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clínica Médica
        </Typography>
        {isAuthenticated && (
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;