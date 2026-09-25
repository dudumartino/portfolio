import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Mantém a mesma pasta de saída do CRA para não quebrar o deploy
    outDir: 'build',
  },
});
