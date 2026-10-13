import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@dimforge/rapier3d-compat')) return 'fisica'
          if (id.includes('node_modules/three/')) return 'three'
          return undefined
        },
      },
    },
  },
  esbuild: {
    drop: ['debugger'],
    legalComments: 'none',
  },
})
