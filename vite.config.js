import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // Extension .jsx
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '10.60.1.211', // Votre adresse IP locale
        port: 8000, // Por
        watch: {
          usePolling: true, // Utile pour éviter certains problèmes de réseau
        },
      },
});
