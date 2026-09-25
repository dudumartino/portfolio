/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false, // evita conflito com os estilos CSS existentes
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
