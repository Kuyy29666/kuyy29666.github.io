import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkToc
    ],
    rehypePlugins: [rehypeKatex],
  },

  site: 'https://kuyy29666.github.io',
});