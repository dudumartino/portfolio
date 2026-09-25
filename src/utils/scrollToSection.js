/**
 * Rola suavemente até a seção com o id informado.
 * @param {string} id - O ID do elemento da seção para onde rolar.
 */
export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Handler para links âncora (href="#id"): mantém o link funcionando sem JS,
 * mas usa rolagem suave quando o JS está ativo.
 */
export const handleAnchorClick = (id) => (event) => {
  event.preventDefault();
  scrollToSection(id);
};
