// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE: update `site` to the client's real domain before the production build.
// It drives canonical URLs, sitemap.xml and Open Graph tags.
export default defineConfig({
  site: 'https://bckadvocates.co.zm',
  build: {
    // emit /about/index.html etc. → clean URLs that work on plain Apache/cPanel
    format: 'directory',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
