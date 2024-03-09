import { defineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api':'https://cosmo-blog-backend.onrender.com'
    },
  },
  plugins: [
    react(),
    chunkSplitPlugin()
  ],
  
  
})

