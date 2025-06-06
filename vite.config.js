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
      'a5b1-2405-201-1000-50ae-6d37-5716-7d6c-4985.ngrok-free.app'
    ]

  }
})
