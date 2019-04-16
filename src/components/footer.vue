<template>
  <div>
    <ul class="footer-ul bordert1px">
      <li class="footer-li"
          v-for="item in tabs"
          :key="item.name"    
      >
        <router-link :to="item.href" active-class="active" class="a-link">
          <i :class="['iconfont',item.icon]"></i>
          <span> {{item.name}} </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tabs:{
      type:Array,
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer-ul{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    padding-top: 4px;
    .footer-li{
      width: 25%;
      height: 48px;
      text-align: center;
      display: flex;
      justify-content: center;
      .a-link{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #8e8e93;
      }
      .active{
        color: #0089dc;
      }      
    }
  }
</style>

