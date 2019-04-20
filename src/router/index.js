// 创建的路由模块,已将其引入到了main.js中
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/',
      component: () => import('../page/home/home.vue'),
      children: [
        { path: 'fristPage', component: () => import('../page/home/children/fristPage.vue') },
        { path: 'find', component: () => import('../page/home/children/find.vue') },
        { path: 'orderform', component: () => import('../page/home/children/orderform.vue') },
        { path: 'mysetting', component: () => import('../page/home/children/mySetting.vue') },
        { path: '', redirect: ('/mysetting') }
      ]
    },
    {
      path: '/mysetting',
      component: () => import('../page/mysetting/myset.vue'),
      children: [
        // { path: '', redirect: ('../page/mysetting/myset.vue') }
      ]
    },
    { path: '/login', component: () => import('../page/login/login.vue') },
    { path: '/shop',
      component: () => import('../page/shoppingCenter/shop.vue'),
      children: [
        { path: 'shoplist', component: () => import('../page/shoppingCenter/children/shopList.vue') },
        { path: 'shopevaluate', component: () => import('../page/shoppingCenter/children/shopEvaluate.vue') },
        { path: 'merchant', component: () => import('../page/shoppingCenter/children/merchant.vue') },
        { path: '', redirect: ('shoplist') }
      ]
    },
    { path: '*', redirect: ('/mysetting') },
    { path: '/city', component: () => import('../page/city/city.vue') },
    { path: '/Goldmall', component: () => import('../page/Goldmall/Goldmall.vue') }
  ]
})
