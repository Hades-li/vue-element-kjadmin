import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import Element from 'element-ui'
// import { Button } from 'element-ui'
// import '@/assets/themes/main/index.css'
import '@/assets/css/index.scss'
import 'highlight.js/styles/mono-blue.css'
import './icons'
import { optionalChaining } from './utils'
import fly from './utils/fly'
import axios from './utils/axios'

Vue.prototype.$$ = optionalChaining
Vue.prototype.$fly = fly
Vue.prototype.$axios = axios
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
