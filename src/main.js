import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pako from 'pako'
createApp(App).use(store).use(router).use(pako).mount('#app')
