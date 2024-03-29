import './assets/css/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icons from './global/register-icons'

const app = createApp(App)

app.use(icons)
app.use(store)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
