import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Medicos from './pages/Medicos';
import Pacientes from './pages/Pacientes';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/medicos" element={<PrivateRoute><Medicos /></PrivateRoute>} />
          <Route path="/pacientes" element={<PrivateRoute><Pacientes /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
