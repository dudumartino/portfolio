// src/components/Contato.jsx
import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/Contato.css';
import { useTranslation } from 'react-i18next'; // Importa

const Contato = () => {
  const { t } = useTranslation(); // Usa

  const seuNumero = "55319XXXXXXXX"; // Lembre de trocar
  const suaMensagem = t('contact.whatsappMessage'); // Usa t()
  const mensagemCodificada = encodeURIComponent(suaMensagem);
  const whatsappUrl = `https://wa.me/${seuNumero}?text=${mensagemCodificada}`;

  return (
    <section id="contato" className="contato-section">
      <div className="contato-container">
        <h2 className="contato-title">{t('contact.title')}</h2> {/* Usa t() */}
        <p className="contato-intro">{t('contact.intro')}</p> {/* Usa t() */}
        <div className="social-icons">
          <a href="https://linkedin.com/in/..." className="social-icon-link linkedin-icon"><Linkedin size={48} /></a>
          <a href="https://github.com/dudumartino" className="social-icon-link github-icon"><Github size={48} /></a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon-link whatsapp-icon"><FaWhatsapp size={48} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contato;