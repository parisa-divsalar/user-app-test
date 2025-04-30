import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    port: 3000, // Change the port number here
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    manifest: true,
  },
});
function tailwindcss(): import("vite").PluginOption {
  throw new Error('Function not implemented.');
}

