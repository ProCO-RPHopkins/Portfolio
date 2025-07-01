import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // your Express port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
