import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // atau 'hybrid' / 'static' tergantung projekmu
  adapter: vercel(),
});