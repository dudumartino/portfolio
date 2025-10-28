// src/components/Navbar.jsx - (ÚLTIMA TENTATIVA COM EMOJIS)
import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = ({ onScrollTo }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("br");

  const navLinks = [
    { id: "sobre", nome: "Sobre Mim" },
    { id: "skills", nome: "Habilidades" },
    { id: "projetos", nome: "Projetos" },
    { id: "contato", nome: "Contato" },
  ];

  const handleNavClick = (id) => {
    onScrollTo(id);
    setMenuAberto(false);
  };

  // Função para pegar o emoji da bandeira
  const getFlagEmoji = (lang) => {
    if (lang === "en") return "🇺🇸";
    if (lang === "es") return "🇪🇸";
    return "🇧🇷"; // Default
  };

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const NavbarActions = ({ isMobile = false }) => (
    <div className={isMobile ? "navbar-mobile-actions" : "navbar-actions"}>
      {/* Botão Baixar CV */}
      <a
        href="/seu-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={
          isMobile
            ? "navbar-mobile-button cv-button-mobile"
            : "navbar-button cv-button"
        }
      >
        <Download size={isMobile ? 24 : 18} />
        Baixar CV
      </a>

      {/* Switch de Tema */}
      <button
        className="theme-switch"
        onClick={handleThemeToggle}
        aria-label="Mudar tema"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      {/* Seletor de Idioma */}
      <div className="lang-selector">
        <button
          className="lang-button"
          onClick={() => setIsLangOpen(!isLangOpen)}
          aria-label="Mudar idioma"
        >
          {/* Tenta exibir o emoji da bandeira selecionada */}
          <span className="flag-emoji">{getFlagEmoji(selectedLang)}</span>
        </button>
        {isLangOpen && (
          <div className="lang-dropdown">
            {/* Tenta exibir os emojis no dropdown */}
            <button onClick={() => handleLangChange("br")}>
              <span className="flag-emoji">🇧🇷</span> Português
            </button>
            <button onClick={() => handleLangChange("en")}>
              <span className="flag-emoji">🇺🇸</span> English
            </button>
            <button onClick={() => handleLangChange("es")}>
              <span className="flag-emoji">🇪🇸</span> Español
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand" onClick={() => onScrollTo("home")}>
          EduardoMartino
        </span>

        <div className="navbar-right-content">
          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="navbar-button"
              >
                {link.nome}
              </button>
            ))}
          </div>

          <NavbarActions isMobile={false} />

          <div className="navbar-toggle">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="navbar-toggle-button"
            >
              {menuAberto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`navbar-mobile-overlay ${menuAberto ? "is-open" : ""}`}
        onClick={() => setMenuAberto(false)}
      >
        <div
          className="navbar-mobile-content"
          onClick={(e) => e.stopPropagation()}
        >
          <NavbarActions isMobile={true} />
          <hr className="navbar-mobile-divider" />
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
