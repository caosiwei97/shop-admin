import { App } from 'vue'

// 注册全局组件
export default {
  install(app: App) {
    const modules = import.meta.globEager('../components/**/index.ts')
    for (const path in modules) {
      app.use(modules[path].default)
    }
  }
}
