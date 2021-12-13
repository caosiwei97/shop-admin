import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_API_BASE } = loadEnv(mode, process.cwd())

  return {
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
        [VITE_API_BASE]: {
          target: 'https://shop.fed.lagou.com/api',
          changeOrigin: true
        }
      }
    },
    plugins: [
      vue(),
      eslintPlugin({
        cache: true
      })
    ],
    build: {
      rollupOptions: {
        // 自定义输出目录
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/entry-[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
