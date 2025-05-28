import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
  prefetch: true,
  site: 'https://m.jyotishapp.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
