/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false, // evita conflito com os estilos CSS existentes
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
