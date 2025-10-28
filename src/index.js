import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importa nosso CSS global
import App from "./App"; // Importa nosso componente principal

// Encontra a 'div' principal no HTML e inicia o React nela
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
