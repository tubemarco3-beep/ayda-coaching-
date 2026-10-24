import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        votreCoach: resolve(__dirname, 'votre-coach-et-sophrologie/index.html'),
        desert: resolve(__dirname, 'sejour-sophro-feminins-dans-le-desert-algerien-by-ayda/index.html'),
        coaching: resolve(__dirname, 'coaching/index.html'),
        contact: resolve(__dirname, 'prenez-rendez-vous/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: false
  }
});
