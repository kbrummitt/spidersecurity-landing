import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/spidersecurity-landing/",  // MUST match the repo name
  plugins: [react()],
})
