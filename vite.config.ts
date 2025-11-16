import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Garantir que o root aponta para onde está o index.html
const root = existsSync(path.join(__dirname, 'index.html')) 
  ? __dirname 
  : process.cwd()

export default defineConfig({
  plugins: [react()],
  root: root,
  resolve: {
    alias: {
      '@': path.resolve(root, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
})

