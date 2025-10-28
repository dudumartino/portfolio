// src/components/Home.jsx
import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <p className="home-greeting">Eu sou o</p>
        <h1 className="home-name">
          <span className="green-bracket">&lt;</span>
          Eduardo Martino
          <span className="green-bracket">/&gt;</span>
        </h1>
        <p className="home-description">
          <span className="highlight">Desenvolvedor Fullstack</span>, transformo
          ideias em experiências digitais! Desenvolvo sites modernos, com
          interfaces otimizadas e envolventes.
        </p>
        {/* Você pode adicionar um botão de CTA aqui se quiser */}
        {/* <button className="home-cta-button" onClick={() => onScrollTo('contato')}>
          Fale Comigo
        </button> */}
      </div>
    </section>
  );
};

export default Home;
