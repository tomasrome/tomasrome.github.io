import { defineConfig } from "astro/config";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tomasrome.github.io",
  integrations: [sitemap()],

  build: {
    assets: "_astro",
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "_astro/[name].[hash][extname]",
          chunkFileNames: "_astro/[name].[hash].js",
          entryFileNames: "_astro/[name].[hash].js",
        },
      },
    },
  },
});
