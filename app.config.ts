// app.config.ts
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import type {InlineConfig } from 'vite'
import path from 'path';
import { fileURLToPath } from 'url';

// Create dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare module '@tanstack/react-start/config' {
  interface ServerOptions {
    allowedHosts?: string[];
  }
}

const vite: InlineConfig = {
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
    assetsDir: 'dist/assets',
    rollupOptions: {
      external: ['node:stream', 'node:stream/web', 'node:path', 'node:fs', 'node:async_hooks'], // Mark Node.js built-in modules as external
    },
  },
}

export default defineConfig({
  server: {
    preset: 'netlify',
    prerender: {
      routes: ['/', '/sign-in', '/sign-up', '/forgot-password', '/_authed/_layout', '/_authed/_layout/members', '/_authed/_layout/organizations','/_authed/_layout/chat', '/verify-account', '/create-organization'],
      crawlLinks: true
    },
  },
  tsr: {
    appDirectory: 'app',
  },
  vite,
});