import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';

export default defineConfig({
  integrations: [tailwind()],

  markdown: {
    remarkPlugins: [remarkMath, remarkToc],
    rehypePlugins: [rehypeKatex],
  },

  site: 'https://kuyy29666.github.io',
});