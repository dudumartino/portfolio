// src/components/Projetos.jsx
import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "../styles/Projetos.css";

// Importa o 'db' (nosso banco) do arquivo de configuração
import { db } from "../firebaseConfig";
// Importa as funções do Firestore que vamos usar
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        setLoading(true);
        const projetosCollectionRef = collection(db, "projetos");

        // Ordena por um campo 'order' se existir, senão busca sem ordem
        // (Certifique-se que o campo 'order' existe e é do tipo número nos seus documentos do Firestore)
        const q = query(projetosCollectionRef, orderBy("order", "asc"));

        const snapshot = await getDocs(q);

        const fetchedProjetos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjetos(fetchedProjetos);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        // Verifica se o erro é por falta do índice 'order'
        if (err.code === "failed-precondition") {
          setError(
            "Erro ao ordenar projetos. Verifique se o campo 'order' existe ou ajuste a consulta no código."
          );
        } else {
          setError(
            "Não foi possível carregar os projetos. Tente novamente mais tarde."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

  // --- Renderização condicional ---
  if (loading) {
    return (
      <section id="projetos" className="projetos-section">
        <h2 className="projetos-title">Projetos</h2>
        <p className="loading-message">Carregando projetos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projetos" className="projetos-section">
        <h2 className="projetos-title">Projetos</h2>
        <p className="error-message">{error}</p>
      </section>
    );
  }

  // --- Renderização principal (quando já carregou) ---
  return (
    <section id="projetos" className="projetos-section">
      <h2 className="projetos-title">Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
};

/**
 * Componente de Card para Projeto.
 */
const ProjetoCard = ({ projeto }) => (
  <div className="projeto-card">
    <div className="projeto-image-container">
      <img
        src={projeto.imageUrl}
        alt={`Imagem do ${projeto.title}`}
        className="projeto-image"
      />
    </div>
    <div className="projeto-content">
      <h3 className="projeto-card-title">{projeto.title}</h3>
      <p className="projeto-card-description">{projeto.description}</p>
      <div className="projeto-card-actions">
        {/* --- CORREÇÃO AQUI --- */}
        {/* Garante que o href usa o liveLink do projeto */}
        <a
          href={projeto.liveLink || "#"} // Usa o link ou '#' se não existir
          target="_blank"
          rel="noopener noreferrer"
          className="projeto-button live-button"
          // Adiciona estilo de desabilitado se não houver link
          style={{
            pointerEvents: projeto.liveLink ? "auto" : "none",
            opacity: projeto.liveLink ? 1 : 0.5,
          }}
        >
          <ExternalLink size={18} />
          <span>Saiba Mais</span>
        </a>
        {/* --- FIM DA CORREÇÃO --- */}

        <a
          href={projeto.repoLink || "#"} // Usa o link ou '#' se não existir
          target="_blank"
          rel="noopener noreferrer"
          className="projeto-button code-button"
          // Adiciona estilo de desabilitado se não houver link
          style={{
            pointerEvents: projeto.repoLink ? "auto" : "none",
            opacity: projeto.repoLink ? 1 : 0.5,
          }}
        >
          <Github size={18} />
          <span>Ver Código</span>
        </a>
      </div>
    </div>
  </div>
);

export default Projetos;
