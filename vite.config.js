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
      'cac0-2405-201-1000-50ae-6cd6-272d-9de8-9ae9.ngrok-free.app'
    ]

  }
})
