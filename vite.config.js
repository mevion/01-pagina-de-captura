import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  root: 'frontend',
  publicDir: 'frontend/public',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})