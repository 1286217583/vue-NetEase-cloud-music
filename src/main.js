import Vue from 'vue'
import App from './App.vue'
import router from './router'

// vue-lazyload 图片懒加载
import VueLazyload from 'vue-lazyload'

import 'vant/lib/button/style';


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/damage-img.png',
  loading: '/Loading-img.gif',
  attempt: 3
})

Vue.config.productionTip = false

import './assets/styles/base.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
