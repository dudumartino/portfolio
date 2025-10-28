// src/components/Home.jsx
import React from "react";
import "../styles/Home.css"; // Importa o CSS para Home
//import myImage from '../assets/pixel_dev_image.jpg'; // Importa sua imagem

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content-container">
        {/* Conteúdo de Texto */}
        <div className="home-text-content">
          <h1 className="home-title">
            {/* Texto envolvido em um span */}
            <span className="home-print-text">
              <span className="home-print-f">printf</span>("Olá visitante!");
            </span>
            {/* Elemento do cursor piscando */}
            <span className="home-caret"></span>
          </h1>
          <p className="home-subtitle">Programador Fullstack</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
