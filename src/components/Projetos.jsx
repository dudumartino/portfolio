// src/components/Projetos.jsx
import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "../styles/Projetos.css";

import { db } from "../firebaseConfig";
// ATUALIZADO: Importamos 'orderBy' mas não vamos usá-lo agora
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

        // --- CORREÇÃO AQUI ---
        // Comentamos a linha que ordena
        // const q = query(projetosCollectionRef, orderBy('order', 'asc'));

        // E usamos a referência direta da coleção (sem ordem específica)
        const snapshot = await getDocs(projetosCollectionRef); // Mudança aqui
        // --- FIM DA CORREÇÃO ---

        const fetchedProjetos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjetos(fetchedProjetos);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setError(
          "Não foi possível carregar os projetos. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

  // --- Renderização condicional (sem alteração) ---
  if (loading) {
    /* ... */
  }
  if (error) {
    /* ... */
  }

  // --- Renderização principal (sem alteração) ---
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

// --- ProjetoCard (sem alteração) ---
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
        <a
          href={projeto.liveLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="projeto-button live-button"
          style={{
            pointerEvents: projeto.liveLink ? "auto" : "none",
            opacity: projeto.liveLink ? 1 : 0.5,
          }}
        >
          <ExternalLink size={18} />
          <span>Saiba Mais</span>
        </a>
        <a
          href={projeto.repoLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="projeto-button code-button"
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
