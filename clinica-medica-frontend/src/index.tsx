import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/global'; // ajuste o caminho conforme seu projeto

const container = document.getElementById('root');
const root = createRoot(container!); // Usando a nova API

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();