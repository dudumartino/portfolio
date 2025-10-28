// src/components/Sobre.jsx
import React from "react";
import "../styles/Sobre.css"; // Importa o CSS para Sobre

const Sobre = () => (
  <section id="sobre" className="sobre-section">
    <div className="sobre-container">
      <h2 className="sobre-title">Sobre mim</h2>
      <div className="sobre-content-box">
        <p className="sobre-text">
          Olá! Eu sou o Eduardo, um programador fullstack apaixonado por
          tecnologia. Atualmente, curso Ciência da Computação na PUC Minas, onde
          mergulho diariamente nos desafios e inovações que movem o mundo
          digital.
        </p>
        <p className="sobre-text">
          Minha especialidade é o desenvolvimento fullstack. Tenho conhecimentos
          e projetos sólidos na criação de soluções com React, JavaScript,
          HTML/CSS, .NET e Git, construindo desde interfaces dinâmicas até
          back-ends robustos.
        </p>
        <p className="sobre-text">
          Além do código, sou um grande entusiasta de jogos, séries, filmes e
          músicas. Acredito que essa imersão em boas histórias alimenta minha
          criatividade e minha capacidade de pensar "fora da caixa" para
          resolver problemas.
        </p>
      </div>
    </div>
  </section>
);

export default Sobre;
