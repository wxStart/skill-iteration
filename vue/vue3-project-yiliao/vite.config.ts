import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server:{
    // proxy:{
    //   '/api': {
    //     target: 'http://10.32.19.60:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // }
  }
});
