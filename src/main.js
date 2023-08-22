

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vite-plugin-svg-icons/register';

const app = createApp(App)

app.use(router)

app.mount('#app')
