import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  server: {
    proxy: {
      '/admin': {
        target: 'https://shop.fed.lagou.com/api',
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    eslintPlugin({
      cache: false
    })
  ]
})
