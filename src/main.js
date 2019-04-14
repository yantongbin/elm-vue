import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入的路由模块文件

Vue.config.productionTip = false

new Vue({
  router,//在项目全局中调用路由
  render: h => h(App)
}).$mount('#app')
