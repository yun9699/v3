import { createApp } from 'vue'
import App from './App.vue'
import routeConfig from './Routers'


createApp(App)
.use(routeConfig)
.mount('#app')
