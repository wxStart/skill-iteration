import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['./src/*.jsx', './src/**/*.jsx'],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',//! 处理index.module.css 中 .head-title可以通过 style.headTitle 方式访问
    },
  },
});
