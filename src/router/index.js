// 创建的路由模块,已将其引入到了main.js中
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/',
      component: () => import('../page/home/home.vue'),
      children: [
        { path: 'fristPage', component: () => import ('../page/fristPage/fristPage.vue') },
        { path: 'find', component: () => import ('../page/find/find.vue') },
        { path: 'orderform', component: () => import ('../page/orderForm/orderform.vue') },
        { path: 'mysetting', component: () => import ('../page/mySetting/mySetting.vue') }
      ]

    }
  ]
})
