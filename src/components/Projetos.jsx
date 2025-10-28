// src/components/Projetos.jsx
import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "../styles/Projetos.css"; // Importa o CSS para Projetos

// --- Mock de Dados ---
// Isso simula os dados que virão do Firebase.
const mockProjects = [
  {
    id: "1",
    title: "Projeto Incrível 1",
    description:
      "Uma breve descrição sobre este projeto, as tecnologias usadas e o problema que ele resolve.",
    imageUrl: "https://placehold.co/400x225/3a5040/FFFFFF?text=Projeto+1", // Placeholder
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: "2",
    title: "Projeto Foco 2",
    description:
      "Este projeto foca em uma solução específica, mostrando sua capacidade de resolver desafios.",
    imageUrl: "https://placehold.co/400x225/3a5040/FFFFFF?text=Projeto+2", // Placeholder
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: "3",
    title: "App Colaborativo 3",
    description:
      "Um exemplo de aplicação colaborativa, destacando suas habilidades em desenvolvimento front-end.",
    imageUrl: "https://placehold.co/400x225/3a5040/FFFFFF?text=Projeto+3", // Placeholder
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: "4",
    title: "Ferramenta de IA 4",
    description:
      "Demonstração de uma ferramenta utilizando inteligência artificial, como um chatbot.",
    imageUrl: "https://placehold.co/400x225/3a5040/FFFFFF?text=Projeto+4", // Placeholder
    liveLink: "#",
    repoLink: "#",
  },
];
// --- Fim do Mock ---

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simula a busca de dados (Firebase)
    const fetchProjetos = async () => {
      try {
        setLoading(true);
        // NO FUTURO, VOCÊ VAI SUBSTITUIR ISSO POR:
        // const dadosDoFirebase = await getDocs(collection(db, "projetos"));
        // const projetosFormatados = dadosDoFirebase.docs.map(doc => ({...doc.data(), id: doc.id}));

        // Por enquanto, usamos o mock com um atraso de 1 segundo
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProjetos(mockProjects); // Usamos os dados do mock

        setError(null);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setError("Não foi possível carregar os projetos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []); // O array vazio [] faz isso rodar só uma vez

  // Se estiver carregando, mostra uma mensagem
  if (loading) {
    return (
      <section id="projetos" className="projetos-section">
        <h2>Projetos</h2>
        <p className="loading-message">Carregando projetos...</p>
      </section>
    );
  }

  // Se der erro, mostra uma mensagem
  if (error) {
    return (
      <section id="projetos" className="projetos-section">
        <h2>Projetos</h2>
        <p className="error-message">{error}</p>
      </section>
    );
  }

  // Se tudo der certo, mostra os projetos
  return (
    <section id="projetos" className="projetos-section">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
};

/**
 * Componente interno para Card de Projeto.
 */
const ProjetoCard = ({ projeto }) => (
  <div className="projeto-card">
    {/* Imagem do Projeto */}
    <div className="projeto-image-container">
      <img
        src={projeto.imageUrl}
        alt={`Imagem do ${projeto.title}`}
        className="projeto-image"
      />
    </div>
    {/* Conteúdo do Card */}
    <div className="projeto-content">
      <h3 className="projeto-card-title">{projeto.title}</h3>
      <p className="projeto-card-description">{projeto.description}</p>
      {/* Botões de Ação */}
      <div className="projeto-card-actions">
        <a
          href={projeto.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="projeto-button live-button"
        >
          <ExternalLink size={18} />
          <span>Saiba Mais</span>
        </a>
        <a
          href={projeto.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="projeto-button code-button"
        >
          <Github size={18} />
          <span>Ver Código</span>
        </a>
      </div>
    </div>
  </div>
);

export default Projetos;
