import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    host:'0.0.0.0',
    port:3000,
    allowedHosts: [
      '5c00-2405-201-1000-50ae-5500-b331-940-5d9f.ngrok-free.app'
    ]

  }
})
