import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gawaksh007.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});