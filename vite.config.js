import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce-app/', // ⚠️ yeh repo name hona chahiye
  plugins: [react()]
});
