import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// 引入全局样式
import './assets/css/base.css'
// 引入全局vant修改样式
import './assets/css/vant.css'
// 引入字体图标样式
import './assets/fonts/iconfont.css'

// 引入vant模块
import Vant from './vant'

let app = createApp(App)

// 使用路由
app.use(router)

// 使用vant
app.use(Vant)

app.mount('#app')
