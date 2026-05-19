import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 💡 引入 Tailwind v4 的 Vite 插件

export default defineConfig({
  // 极简风格不需要其他的 integration，直接写在 vite 配置里
  vite: {
    plugins: [tailwindcss()],
  },
});