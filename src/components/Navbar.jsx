import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = ({ onScrollTo }) => {
  const { t, i18n } = useTranslation();

  // Tema padrão é escuro; true liga a classe "light-mode" no body
  const [lightMode, setLightMode] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? "light-mode" : "";
  }, [lightMode]);

  // Links de navegação (comentados caso você mude de ideia)
  /*
  const navLinks = [
    { id: 'sobre', key: 'navbar.about' },
    { id: 'skills', key: 'navbar.skills' },
    { id: 'projetos', key: 'navbar.projects' },
    { id: 'contato', key: 'navbar.contact' },
  ];
  */

  const handleNavClick = (id) => {
    onScrollTo(id);
  };

  const getFlagEmoji = (lang) => {
    if (lang.startsWith("en")) return "🇺🇸";
    if (lang.startsWith("es")) return "🇪🇸";
    return "🇧🇷";
  };

  const handleLangChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
  };

  const handleThemeToggle = () => {
    setLightMode(!lightMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Esquerda: Logo EM */}
        <span className="logo" onClick={() => handleNavClick("home")}>
          <img
            src="/logo-em.png"
            alt="Eduardo Martino Logo"
            className="navbar-logo-img"
          />
        </span>

        {/* --- Centro: Links (Comentados) --- */}
        {/* <div className="navbar-center"> ... </div> */}

        {/* --- Direita: Ações (Sempre Visíveis) --- */}
        <div className="navbar-actions-right">
          {/* Botão Baixar CV */}
          <a
            href="https://firebasestorage.googleapis.com/v0/b/meu-portfollio.firebasestorage.app/o/CV-Eduardo-2025.2.pdf?alt=media&token=fb2ee59b-6100-4b53-8f4f-aea43dc7ac59"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-action-button cv-button"
            aria-label={t("navbar.downloadCV")}
          >
            <Download size={18} />
            <span className="cv-button-text">{t("navbar.downloadCV")}</span>
          </a>

          {/* Switch de Tema */}
          <button
            className="theme-switch"
            onClick={handleThemeToggle}
            aria-label={t("navbar.theme")}
          >
            {lightMode ? "☀️" : "🌙"}
          </button>

          {/* Seletor de Idioma */}
          <div className="lang-selector">
            <button
              className="lang-button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label={t("navbar.language")}
            >
              <span className="flag-emoji">{getFlagEmoji(i18n.language)}</span>
            </button>
            {isLangOpen && (
              <div className="lang-dropdown">
                <button onClick={() => handleLangChange("pt")}>
                  <span className="flag-emoji">🇧🇷</span>{" "}
                  {t("navbar.portuguese")}
                </button>
                <button onClick={() => handleLangChange("en")}>
                  <span className="flag-emoji">🇺🇸</span> {t("navbar.english")}
                </button>
                <button onClick={() => handleLangChange("es")}>
                  <span className="flag-emoji">🇪🇸</span> {t("navbar.spanish")}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* --- Antigo Hambúrguer e Dropdown (Comentados) --- */}
        {/*
        <div className="navbar-right"> ... </div> 
        */}
      </div>
    </nav>
  );
};

export default Navbar;
