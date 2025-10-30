// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import './i18n'; // Importa a configuração para inicializar o i18next

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);