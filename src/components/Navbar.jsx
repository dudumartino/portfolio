// src/components/Navbar.jsx
import React, { useState } from 'react';
// CORREÇÃO 1: 'FaWhatsapp' foi removido daqui.
import { Menu, X, Download } from 'lucide-react';
import '../styles/Navbar.css'; // Importa o CSS para a Navbar

const Navbar = ({ onScrollTo }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('br');

  const navLinks = [
    { id: 'sobre', nome: 'Sobre Mim' },
    { id: 'skills', nome: 'Habilidades' }, 
    { id: 'projetos', nome: 'Projetos' },
    { id: 'contato', nome: 'Contato' },
  ];

  const handleNavClick = (id) => {
    onScrollTo(id);
    setMenuAberto(false); // Fecha o menu ao clicar em um link
  };

  const getFlagEmoji = (lang) => {
    if (lang === 'en') return '🇺🇸';
    if (lang === 'es') return '🇪🇸';
    return '🇧🇷'; 
  };

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setIsLangOpen(false); 
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Componente interno para as AÇÕES (CV, Tema, Idioma)
  const NavbarActions = ({ isMobile = false }) => (
    <div className={isMobile ? "navbar-mobile-actions" : "navbar-actions-desktop"}>
      {/* Botão Baixar CV */}
      <a 
        href="/seu-cv.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-action-button cv-button"
      >
        <Download size={20} />
        Baixar CV
      </a>

      {/* Switch de Tema */}
      <div className="navbar-action-item">
        <span>Tema</span>
        <button 
          className="theme-switch" 
          onClick={handleThemeToggle}
          aria-label="Mudar tema"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Seletor de Idioma */}
      <div className="navbar-action-item lang-selector">
        <span>Idioma</span>
        <div className="lang-selector-inner">
          <button 
            className="lang-button" 
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Mudar idioma"
          >
            <span className="flag-emoji">{getFlagEmoji(selectedLang)}</span>
          </button>
          {isLangOpen && (
            <div className="lang-dropdown">
              <button onClick={() => handleLangChange('br')}>
                <span className="flag-emoji">🇧🇷</span> Português
              </button>
              <button onClick={() => handleLangChange('en')}>
                <span className="flag-emoji">🇺🇸</span> English
              </button>
              <button onClick={() => handleLangChange('es')}>
                <span className="flag-emoji">🇪🇸</span> Español
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Esquerda: EM (Verde) */}
        <span
          className="navbar-brand-mono"
          onClick={() => onScrollTo('home')}
        >
          EM
        </span>

        {/* Meio: Links Desktop */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="navbar-link-button"
            >
              {link.nome}
            </button>
          ))}
        </div>

        {/* Direita: Menu Hambúrguer (Sempre visível) */}
        <div className="navbar-toggle">
          <button onClick={() => setMenuAberto(!menuAberto)} className="navbar-toggle-button">
            {menuAberto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENU OVERLAY --- */}
      <div 
        className={`navbar-mobile-overlay ${menuAberto ? 'is-open' : ''}`}
        onClick={() => setMenuAberto(false)} 
      >
        <div className="navbar-mobile-content" onClick={(e) => e.stopPropagation()}>
          
          {/* --- CORREÇÃO 2: ESTA LINHA ESTAVA FALTANDO ---
            É ela que desenha os botões de CV, Tema e Idioma
          */}
          <NavbarActions isMobile={true} />

          <hr className="navbar-mobile-divider" />

          {/* 2. Links de Navegação */}
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="navbar-mobile-button"
              >
                {link.nome}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;