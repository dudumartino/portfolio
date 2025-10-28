// src/components/Contato.jsx
import React from "react";
// Importa os ícones que já usamos
import { Linkedin, Github } from "lucide-react";
// NOVO: Importa o ícone do WhatsApp
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Contato.css"; // Importa o CSS para Contato

const Contato = () => {
  // --- LÓGICA DO WHATSAPP ---
  // ATENÇÃO: Troque pelo seu número com DDI (ex: 5531999999999)
  const seuNumero = "5531987263618";

  const suaMensagem =
    "Olá, vi seu portfólio e gostaria de um orçamento para um projeto.";

  // Codifica a mensagem para ser usada na URL
  const mensagemCodificada = encodeURIComponent(suaMensagem);

  const whatsappUrl = `https://wa.me/${seuNumero}?text=${mensagemCodificada}`;
  // --- FIM DA LÓGICA ---

  return (
    <section id="contato" className="contato-section">
      <div className="contato-container">
        <h2 className="contato-title">Vamos nos conectar!</h2>
        <p className="contato-intro">
          Estou disponível para novas oportunidades e colaborações.
        </p>
        <div className="social-icons">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eduardo-martino/" /* Altere para seu perfil */
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link linkedin-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={48} />
          </a>

          {/* Github */}
          <a
            href="https://github.com/dudumartino" /* Altere para seu usuário */
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link github-icon"
            aria-label="Github"
          >
            <Github size={48} />
          </a>

          {/* NOVO: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link whatsapp-icon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={48} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;
