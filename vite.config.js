import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        estructuras: resolve(__dirname, 'pages/estructuras.html'),
        tarflex: resolve(__dirname, 'pages/tarflex.html'),
        lonapvc: resolve(__dirname, 'pages/lona-pvc.html'),
        carpas: resolve(__dirname, 'pages/carpas.html')
      }
    }
  }
});
