import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 443,
    https: true,
    headers: {
      'Cache-Control': 'no-store',
    }
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Upgrade-Insecure-Requests': '1',
      'Cache-Control': 'no-store'
    }
  },
  build: {
    sourcemap: true,
    // Ensure environment variables are replaced during build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  // Add better environment variable handling
  envPrefix: 'VITE_'
});
