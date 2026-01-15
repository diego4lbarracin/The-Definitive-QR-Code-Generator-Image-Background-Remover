import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/The-Definitive-QR-Code-Generator-Image-Background-Remover/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
