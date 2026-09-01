// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://olimpiada-inteligencia-artificial.cl';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
