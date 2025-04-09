// app.config.ts
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import type {InlineConfig } from 'vite'
import path from 'path';
import { fileURLToPath } from 'url';
import { O } from './dist/_build/assets/client-FwIbwupS';

// Create dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare module '@tanstack/react-start/config' {
  interface ServerOptions {
    allowedHosts?: string[];
  }
}

const vite: InlineConfig = {
  server: {
    allowedHosts: ['localhost', '127.0.0.1', 'encore.test', 'staging-intellitask-yrr2.encr.app'],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
  resolve: {
    alias: {
      '~encore': path.resolve(__dirname, './encore.gen'),
    },
  },
  optimizeDeps: {
    include: ['stream', 'stream/web', 'path', 'fs', 'async_hooks'], // Include Node.js built-in modules
  },
  build: {
    rollupOptions: {
      external: ['node:stream', 'node:stream/web', 'node:path', 'node:fs', 'node:async_hooks'], // Mark Node.js built-in modules as external
    },
  },
}

export default defineConfig({
  server: {
    preset: 'netlify',
  },
  tsr: {
    appDirectory: 'app',
  },
  vite,
});