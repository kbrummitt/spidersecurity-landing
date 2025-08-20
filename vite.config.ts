import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// IMPORTANT: replace REPO_NAME with your repo (e.g., "spidersecurity-landing")
export default defineConfig({
  base: "/REPO_NAME/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  }
})
