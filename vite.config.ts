import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  },
  server: {
    host: '0.0.0.0',  // Faz o Vite ouvir em todas as interfaces
    port: 3000         // Ou outra porta desejada, mas normalmente a porta 3000 é usada
  },
  preview: {
    allowedHosts: ['clone-spotify-evm8.onrender.com'] // Adicione o host do Render aqui
  }
});
