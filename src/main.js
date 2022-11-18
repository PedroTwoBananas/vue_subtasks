import { createApp } from 'vue'
import App from './components/App.vue'
import router from '@/components/router/router'
import { store } from '@/store'

createApp(App).use(router).use(store).mount('#app')
