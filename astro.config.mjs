// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL, SIGNUP_URL } from './src/config';

export default defineConfig({
  site: SITE_URL,
  // Static replacement for the old Netlify /signup redirect: Astro writes a forwarding page.
  redirects: { '/signup': SIGNUP_URL },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
