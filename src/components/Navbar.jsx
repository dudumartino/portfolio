// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react"; // Importamos os ícones que vamos usar
import "../styles/Navbar.css";

// 1. ADAPTADO: Recebe 'onScrollTo' como prop
const Navbar = ({ onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // false = dark (padrão), true = light

  useEffect(() => {
    // Adiciona/remove a classe 'light-mode' no body
    // Nosso CSS em index.css vai cuidar do que isso significa
    document.body.className = darkMode ? "light-mode" : "";
  }, [darkMode]);

  // Função helper para fechar o menu ao clicar
  const handleNavClick = (id) => {
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Esquerda: Logo EM */}
      <div className="navbar-left">
        <span className="logo" onClick={() => handleNavClick("home")}>
          EM
        </span>
      </div>

      {/* Centro: Links de Navegação (Desktop) */}
      <div className="navbar-center">
        {/* 2. ADAPTADO: Trocamos <a> por <button> para usar o onScrollTo */}
        <button onClick={() => handleNavClick("sobre")}>Sobre mim</button>
        <button onClick={() => handleNavClick("skills")}>Habilidades</button>
        <button onClick={() => handleNavClick("projetos")}>Projetos</button>
        <button onClick={() => handleNavClick("contato")}>Contato</button>
      </div>

      {/* Direita: Hambúrguer */}
      <div className="navbar-right">
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {/* Usamos os ícones do Lucide-react */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* O Menu que abre */}
        <div className={`menu-dropdown ${isMenuOpen ? "open" : ""}`}>
          {/* 3. ADAPTADO: Adicionamos os links de navegação aqui para o mobile */}
          {/*<div className="mobile-links-section">
            <button onClick={() => handleNavClick("sobre")}>Sobre mim</button>
            <button onClick={() => handleNavClick("skills")}>
              Habilidades
            </button>
            <button onClick={() => handleNavClick("projetos")}>Projetos</button>
            <button onClick={() => handleNavClick("contato")}>Contato</button>
          </div>
           {-----REMOVER O COMENTARIO SE QUISER ADICIONAR OS CAMPOS AO MENU HAMBURGUER-----}
          <hr className="mobile-divider" />*/}

          {/* Seção de Ações (CV, Tema, Idioma) */}
          <div className="mobile-actions-section">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/meu-portfollio.firebasestorage.app/o/CV-Eduardo-2025.2.pdf?alt=media&token=41536576-45fa-4158-b90b-ae8e6f61e6fb"
              download
              className="cv-button"
            >
              <Download size={18} /> Baixar CV
            </a>

            <div className="action-item-mobile">
              <span>Tema</span>
              <div
                className="switch-container"
                onClick={() => setDarkMode(!darkMode)}
              >
                {/* Trocamos a lógica: Padrão é Escuro (Lua) */}
                {darkMode ? "☀️" : "🌙"}
              </div>
            </div>

            <div className="action-item-mobile">
              <span>Idioma</span>
              <select className="language-select">
                <option value="pt">🇧🇷</option>
                <option value="en">🇺🇸</option>
                <option value="es">🇪🇸</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
