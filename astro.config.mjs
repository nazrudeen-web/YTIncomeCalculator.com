// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',         // Enables SSR mode
  adapter: cloudflare(),    // Use Cloudflare Functions for SSR
  image: {
    // Disable image processing at runtime (Cloudflare doesn't support `sharp`)
    service: { entrypoint: 'astro/assets/services/noop' }
  }
});