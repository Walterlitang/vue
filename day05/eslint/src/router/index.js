// 1.导入vue和vue-router模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由组件
import about from '@/components/MyAbout.vue'
import home from '@/components/MyHome.vue'
import movie from '@/components/MyMovie.vue'
// 2.将VueRouter安装为vue的插件
Vue.use(VueRouter)
// 3.创建路由的实例对象
const router = new VueRouter({
  // 路由规则
  routes: [
    { path: '/', redirect: '/home' }, // 重定向的路由规则
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/movie', component: movie }
  ]
})
// 4.导出router对象
export default router
// 5.将路由模块挂载到main.js中
