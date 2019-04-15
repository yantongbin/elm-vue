<template>
  <div id="home">
    <router-view></router-view>
    <footerBody :tabs = 'tabs'></footerBody>
  </div>
</template>
<script>
import footerBody from '../../components/footer'
export default {
  name: 'home',
  data() {
    return {
      tabs:[
        { name: '首页', href: '/fristpage', icon: 'icon-elmyhq' },
        { name: '发现', href: '/find', icon: 'icon-find' },
        { name: '订单', href: '/orderform', icon: 'icon-copy' },
        { name: '我的', href: '/mySetting', icon: 'icon-wode' }
      ]
    }
  },
  components: {
    footerBody
  }
}
</script>
