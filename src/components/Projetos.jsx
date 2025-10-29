// src/components/Projetos.jsx
import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "../styles/Projetos.css";

import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      if (!db) {
        setError("Erro na configuração do Firebase. Verifique as credenciais.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const projetosCollectionRef = collection(db, "projetos");
        const q = query(projetosCollectionRef, orderBy("order", "asc"));
        const snapshot = await getDocs(q);

        const fetchedProjetos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjetos(fetchedProjetos);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar ou ordenar projetos:", err);
        if (err.code === "failed-precondition") {
          setError(
            <>
              Erro ao ordenar: Índice do Firestore ausente. Verifique o console
              do navegador (F12) para o link de criação do índice.
            </>
          );
        } else {
          setError(
            "Não foi possível carregar os projetos. Verifique a conexão ou as regras do Firestore."
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
    /* ... */
  }
  if (error) {
    /* ... */
  }

  return (
    <section id="projetos" className="projetos-section">
      <h2 className="projetos-title">Projetos</h2>

      {/* Grid de Projetos */}
      {projetos.length > 0 ? (
        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <ProjetoCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      ) : (
        !loading &&
        !error && <p className="loading-message">Nenhum projeto encontrado.</p>
      )}

      {/* --- NOVO: CTA PARA O GITHUB --- */}
      <div className="github-cta">
        <p>Interessado em ver mais projetos?</p>
        <a
          href="https://github.com/dudumartino" // <-- COLOQUE SEU LINK DO GITHUB AQUI
          target="_blank"
          rel="noopener noreferrer"
          className="github-cta-button"
        >
          <Github size={18} />
          <span>Clique aqui</span>
        </a>
      </div>
      {/* --- FIM DO NOVO CTA --- */}
    </section>
  );
};

// --- ProjetoCard (sem alteração) ---
const ProjetoCard = ({ projeto }) => (
  // ... (código do ProjetoCard continua igual) ...
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
