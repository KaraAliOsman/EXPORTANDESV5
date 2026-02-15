import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://exportandes.cl',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});
