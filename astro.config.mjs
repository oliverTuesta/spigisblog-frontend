import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});