import { createApp } from 'vue'
import App from './App.vue'
import element from './plugins/element'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
import AdminUI from './plugins/admin-ui'

console.log

createApp(App).use(store, key).use(router).use(element).use(AdminUI).mount('#app')
