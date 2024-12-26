import type { Config } from 'tailwindcss'

const config: Config = {
  // 配置需要处理的文件路径
  content: [
    // 处理组件目录下的 js、vue、ts 文件
    './components/**/*.{js,vue,ts}',
    // 处理布局文件
    './layouts/**/*.vue',
    // 处理页面文件
    './pages/**/*.vue',
    // 处理插件文件
    './plugins/**/*.{js,ts}',
    // 处理根组件
    './app.vue',
    // 处理错误页面
    './error.vue',
  ],
  // 主题配置
  theme: {
    // 扩展默认主题配置
    extend: {},
  },
  // Tailwind 插件配置
  plugins: [],
}

export default config 