import type { Config } from 'postcss-load-config'

const config: Config = {
  plugins: {
    // 使用 Tailwind CSS 处理样式
    tailwindcss: {},
    // 自动添加浏览器前缀
    autoprefixer: {},
  }
}

export default config 