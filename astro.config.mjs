import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gawaksh007.github.io',
  base: '/', // Use '/' for username.github.io, or '/repo-name' for project sites
  integrations: [tailwind()],
  output: 'static',
});