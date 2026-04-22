import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

const copyIndexTo404 = () => {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      fs.copyFileSync(path.resolve(__dirname, 'dist/index.html'), path.resolve(__dirname, 'dist/404.html'))
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyIndexTo404()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      },
    },
  },
})
