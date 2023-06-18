import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:'/toDoApp/',
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/test/setup.js',
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
