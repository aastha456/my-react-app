import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Ensures file changes are detected in all environments
      interval: 100,    // Polling interval in ms
    },
    hmr: {
      overlay: true,    // Show overlay for errors
    },
  },
});