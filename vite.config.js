import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/jonathancw-tang/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
      '@components': path.resolve(rootDir, './src/components'),
      '@assets': path.resolve(rootDir, './src/assets'),
      '@services-assets': path.resolve(rootDir, './src/services-assets'),
    },
  },
})
