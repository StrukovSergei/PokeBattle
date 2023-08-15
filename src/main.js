import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
import { icon } from './directives'
import ElementPlus from 'element-plus'

import './assets/main.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.directive('icon', icon)
app.use(ElementPlus)
app.mount('#app')
