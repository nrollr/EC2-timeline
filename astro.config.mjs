import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://instancetyp.es/',
  integrations: [tailwind(), sitemap()]
});