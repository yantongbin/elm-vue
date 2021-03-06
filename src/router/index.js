// 创建的路由模块,已将其引入到了main.js中
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/',
      component: () => import('../page/home/home.vue'),
      children: [
        { path: 'fristPage', component: () => import ('../page/home/children/fristPage.vue') },
        { path: 'find', component: () => import ('../page/home/children/find.vue') },
        { path: 'orderform', component: () => import ('../page/home/children/orderform.vue') },
        { path: 'mysetting', component: () => import ('../page/home/children/mySetting.vue') }
      ]

    }
  ]
})
