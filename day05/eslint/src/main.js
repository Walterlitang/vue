import Vue from 'vue'
// 导入App2.vue文件
import App from './App2.vue'
// 挂载路由模块
import router from '@/router'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
