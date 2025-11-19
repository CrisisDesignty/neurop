// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://centroneurop.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'esbuild', // Explicitly set ESBuild as minifier
      sourcemap: false, // Disable sourcemaps for production
      rollupOptions: {
        output: {
          manualChunks: {
            // Optional: Split large chunks if needed
            vendor: ['embla-carousel', 'embla-carousel-autoplay'],
          }
        }
      }
    }
  }
});