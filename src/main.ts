import { createApp } from 'vue'
import App from './App.vue'
import element from './plugins/element'
import router from './router'
import store from './store'
import './styles/index.scss'

createApp(App).use(store).use(router).use(element).mount('#app')
