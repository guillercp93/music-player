/**
 * Vite configuration for Electron + React application
 */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron/simple'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    electron({
      main: {
        entry: 'electronapp/main.ts',
        vite: {
          build: {
            outDir: 'dist-electron',
            minify: 'esbuild'
          }
        }
      },
      preload: {
        input: 'electronapp/preload.ts',
        vite: {
          build: {
            outDir: 'dist-electron',
            minify: 'esbuild',
            rollupOptions: {
              output: {
                entryFileNames: 'preload.js'
              }
            }
          }
        }
      },
    })
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist-renderer',
    emptyOutDir: true,
    copyPublicDir: true,
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'public/index.html',
        app: 'src/main.tsx'
      }
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    open: true
  }
})
