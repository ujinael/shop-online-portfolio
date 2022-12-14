import { fileURLToPath, URL } from "node:url";
import legacy from '@vitejs/plugin-legacy'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
  
  server: {
    port: 3000,
    hmr:{overlay:false},
    proxy: {
      "/api": {
        followRedirects: true,
        target: "http://localhost:8080",
        rewrite: (path) => path.replace(/^\/api/, ""),
        toProxy: false,
      },
    },
  },
  
  plugins: [vue(), vueJsx(),legacy({
    renderLegacyChunks:true,
    targets:['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    polyfills: ["es.array.iterator"]
  })],
  resolve: {
    alias: 
  {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
   }
    ,
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
