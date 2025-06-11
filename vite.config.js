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
      'eb9a-2405-201-1000-50ae-c944-3a59-8840-4c5a.ngrok-free.app'
    ]

  }
})
