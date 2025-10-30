// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next'; 

const Navbar = ({ onScrollTo }) => {
  const { t, i18n } = useTranslation(); 
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'light-mode' : '';
  }, [darkMode]);

  // Links de navegação definidos aqui para usar no centro
  const navLinks = [
    { id: 'sobre', key: 'navbar.about' },
    { id: 'skills', key: 'navbar.skills' },
    { id: 'projetos', key: 'navbar.projects' },
    { id: 'contato', key: 'navbar.contact' },
  ];

  const handleNavClick = (id) => {
    onScrollTo(id);
    setIsMenuOpen(false); 
  };

  const getFlagEmoji = (lang) => {
    if (lang.startsWith('en')) return '🇺🇸'; 
    if (lang.startsWith('es')) return '🇪🇸';
    return '🇧🇷'; 
  };

  const handleLangChange = (langCode) => {
    i18n.changeLanguage(langCode); 
    setIsLangOpen(false); 
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Componente interno para as AÇÕES (CV, Tema, Idioma)
  // Renomeado para ficar mais claro
  const MenuActions = () => (
    <div className="mobile-actions-section"> 
      <a 
        href="https://firebasestorage.googleapis.com/v0/b/meu-portfolio.appspot.com/o/EduardoMartino_CV.pdf?alt=media&token=d55383f9-6bc8-4f81-a836-8c4d293f0b4d" // Use seu link
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-action-button cv-button"
      >
        <Download size={20} />
        {t('navbar.downloadCV')} 
      </a>

      <div className="action-item-mobile"> 
        <span>{t('navbar.theme')}</span>
        <button 
          className="theme-switch" 
          onClick={handleThemeToggle}
          aria-label={t('navbar.theme')}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="action-item-mobile lang-selector"> 
        <span>{t('navbar.language')}</span>
        <div className="lang-selector-inner">
          <button 
            className="lang-button" 
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label={t('navbar.language')}
          >
            <span className="flag-emoji">{getFlagEmoji(i18n.language)}</span> 
          </button>
          {isLangOpen && (
            <div className="lang-dropdown">
              <button onClick={() => handleLangChange('pt')}>
                <span className="flag-emoji">🇧🇷</span> {t('navbar.portuguese')}
              </button>
              <button onClick={() => handleLangChange('en')}>
                <span className="flag-emoji">🇺🇸</span> {t('navbar.english')}
              </button>
              <button onClick={() => handleLangChange('es')}>
                <span className="flag-emoji">🇪🇸</span> {t('navbar.spanish')}
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
        {/* Esquerda: Logo EM */}
        <span className="logo" onClick={() => handleNavClick('home')}>
          {t('navbar.brand')}
        </span>

        {/* Centro: Links Desktop */}
        <div className="navbar-center">
          {navLinks.map((link) => (
             <button key={link.id} onClick={() => handleNavClick(link.id)}>
               {t(link.key)}
             </button>
          ))}
        </div>

        {/* Direita: Hambúrguer e Dropdown */}
        <div className="navbar-right"> 
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* O Menu Dropdown */}
          <div className={`menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
            {/* --- ATUALIZAÇÃO PRINCIPAL AQUI --- */}
            {/* Removemos os links de navegação daqui */}
            {/* Removemos o <hr /> daqui */}
            
            {/* Mantemos APENAS as Ações */}
            <MenuActions /> 
            {/* --- FIM DA ATUALIZAÇÃO --- */}
          </div> 
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;