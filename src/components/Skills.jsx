// src/components/Skills.jsx
import React from "react";
// Importa os ícones que vamos usar
import { Users, Brain, MessageSquare, Award } from "lucide-react";
import "../styles/Skills.css"; // Importa o CSS para Skills

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-container">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {/* Coluna de Soft Skills */}
        <div className="skills-category">
          <h3 className="skills-category-title">Soft Skills</h3>
          <div className="soft-skills-cards">
            {/* Cards de Soft Skills */}
            <SoftSkillCard
              icon={<Users size={36} />}
              title="Comunicação Eficaz"
              description="Habilidade de articular ideias de forma clara."
            />
            <SoftSkillCard
              icon={<Brain size={36} />}
              title="Resolução de Problemas"
              description="Foco em encontrar soluções eficientes."
            />
            <SoftSkillCard
              icon={<MessageSquare size={36} />}
              title="Trabalho em Equipe"
              description="Colaborativo e aberto a feedbacks."
            />
            <SoftSkillCard
              icon={<Award size={36} />}
              title="Aprendizado Contínuo"
              description="Proativo e sempre buscando evoluir."
            />
          </div>
        </div>

        {/* Coluna de Hard Skills */}
        <div className="skills-category">
          <h3 className="skills-category-title">Hard Skills</h3>
          <div className="hard-skills-box">
            <p className="hard-skills-intro">
              Minhas principais ferramentas e tecnologias:
            </p>
            <div className="hard-skills-icons">
              {/* Placeholders para os ícones de tecnologia */}
              <HardSkillIcon name="React" />
              <HardSkillIcon name="Node.js" />
              <HardSkillIcon name="JavaScript" />
              <HardSkillIcon name="TypeScript" />
              <HardSkillIcon name="Python" />
              <HardSkillIcon name="SQL" />
              <HardSkillIcon name="Git" />
              <HardSkillIcon name="Docker" />
              <HardSkillIcon name="AWS" />
            </div>
            <p className="hard-skills-note">
              (Aqui você pode substituir os nomes por ícones SVG)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/**
 * Componente interno para Card de Soft Skill.
 */
const SoftSkillCard = ({ icon, title, description }) => (
  <div className="soft-skill-card">
    <div className="soft-skill-icon">{icon}</div>
    <h4 className="soft-skill-title">{title}</h4>
    <p className="soft-skill-description">{description}</p>
  </div>
);

/**
 * Componente interno para Ícone de Hard Skill (Placeholder).
 */
const HardSkillIcon = ({ name }) => (
  <div className="hard-skill-icon-placeholder">{name}</div>
);

export default Skills;
