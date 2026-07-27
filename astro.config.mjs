import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
// (biarkan import lain seperti tailwind kalau ada)

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // (biarkan integrasi lain kalau ada)
});