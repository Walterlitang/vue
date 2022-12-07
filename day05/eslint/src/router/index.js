// 1.导入vue和vue-router模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由组件
import about from '@/components/MyAbout.vue'
import book from '@/components/MyBook.vue'
import home from '@/components/MyHome.vue'
import login from '@/components/MyLogin.vue'
import main from '@/components/MyMain.vue'
import movie from '@/components/MyMovie.vue'
import tab1 from '@/components/tabs/MyTab1.vue'
import tab2 from '@/components/tabs/MyTab2.vue'
// 2.将VueRouter安装为vue的插件
Vue.use(VueRouter)
// 3.创建路由的实例对象
const router = new VueRouter({
  // 路由规则
  routes: [
    { path: '/', redirect: '/home' }, // 重定向的路由规则
    {
      path: '/home',
      component: home,
      children: [
        // { path: '/', redirect: '/home/tab1' },
        { path: '', component: tab1 }, // 默认子路由:children中
        { path: 'tab2', component: tab2 }
      ]
    },
    { path: '/about', component: about },
    {
      path: '/movie',
      component: movie,
      children: [
        { path: '', component: book },
        { path: 'book/:id', component: book, props: true }
      ]
    },
    { path: '/main', component: main },
    { path: '/login', component: login }
  ]
})
// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  // to表示将要去的页面的信息
  // from表示来的页面的信息
  // next表示放行
  if (to.path === '/main') {
    const token = localStorage.getItem('tokenapi')
    if (token) {
      next()// 如果token值存在，放行
    } else {
      next('/login')// 如果token不存在，跳转到login页面
    }
  } else {
    next()
  }
})
// 4.导出router对象
export default router
// 5.将路由模块挂载到main.js中
