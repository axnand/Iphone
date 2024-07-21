<<<<<<< HEAD
import { sentryVitePlugin } from "@sentry/vite-plugin";
=======
>>>>>>> e04a2b9115f5fcb2376b9759ba1c44fc48a825a1
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})
=======
  plugins: [react()],
})
>>>>>>> e04a2b9115f5fcb2376b9759ba1c44fc48a825a1
