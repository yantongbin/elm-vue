import Vue from 'vue'
import App from './App.vue'
import router from './router/index'// 引入的路由模块文件
import { Button, Cell, Field, Card, Tag, Stepper, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Actionsheet, Toast, Swipe, SwipeItem } from 'vant'

Vue.use(Field).use(Button).use(Cell).use(Card).use(Tag).use(Stepper).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(Actionsheet).use(Toast).use(Swipe).use(SwipeItem)
Vue.config.productionTip = false
new Vue({
  router, // 在项目全局中调用路由
  render: h => h(App)
}).$mount('#app')
