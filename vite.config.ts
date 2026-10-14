import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// base './' makes the built site work under any GitHub Pages repo name.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
