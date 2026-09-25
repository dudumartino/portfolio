// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import { scrollToSection } from "./utils/scrollToSection";
import "./styles/App.css"; // Importa o CSS para o layout principal

/**
 * Componente Principal - App
 * Renderiza a estrutura completa do portfólio.
 */
export default function App() {
  return (
    <div className="app-container">
      {/* Passa a função de scroll para o Navbar */}
      <Navbar onScrollTo={scrollToSection} />

      <main>
        {/* Cada seção é um componente separado */}
        <Home />
        <Servicos />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </main>

      {/* Rodapé simples */}
      <footer className="app-footer">Feito com ❤️ por Eduardo Martino.</footer>
    </div>
  );
}
