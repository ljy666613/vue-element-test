import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
