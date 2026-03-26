import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // React Fast Refresh — 保存即热更新，不丢失组件状态
      fastRefresh: true,
    }),
  ],
  server: {
    port: 5173,
    strictPort: true, // 端口被占用时直接报错，不自动切换
    open: true,
    host: 'localhost',
    watch: {
      // 监听 src/data 目录，数据文件更新时自动触发 HMR
      include: ['src/**'],
    },
  },
})
