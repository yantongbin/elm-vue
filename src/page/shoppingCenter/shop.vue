<template>
  <div>
    <div class="header">
      <div class="header-top">
        <span class="background-img index"></span>
      </div>
      <div class="header-bottom">
        <div class="img-box">
          <img src="../../assets/logo.webp" alt>
        </div>
        <div class="title">
          <h2 class="shop-name">湘语</h2>
          <div class="shop-mes">
            <span class="mes-a space">评价</span>
            <span class="mes-a space">月售</span>
            <span class="mes-a space">蜂鸟专送</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shoptab bor1px">
      <div
        v-for="items in tabs"
        :key="items.id"
        class="tab"
        :class="{'active': tabName === items.id}"
        :style="shopTab"
        @click="changeType(items)"
      >
        <p>{{items.name}}</p>
      </div>
      <span class="link" style="left:9%"></span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { id: "shoplist", name: "点餐", href: "/shop/shoplist" },
        { id: "shopevaluate", name: "评价", href: "/shop/shopevaluate" },
        { id: "merchant", name: "商家", href: "/shop/merchant" }
      ],
      tabName: this.$route.path.substring(6)
    }
  },
  computed: {
    shopTab() {
      let obj = { left: "9%" };
      if (this.tabName === 'shoplist') {
        obj.left = "9%";
      } else if (this.tabName === 'shopevaluate') {
        obj.left = "42%";
      } else if (this.tabName === 'merchant') {
        obj.left = "75%";
      }
      return obj
    }
  },
  methods: {
    changeType(item) {
      this.tabName = item.id;
      this.$router.push(item.href);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  .header-top {
    height: 96px;
    .background-img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 96px;
      background-image: url("../../assets/back.webp");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .header-bottom {
    position: relative;
    width: 100%;
    padding-top: 27px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .img-box {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -33px;
      margin-top: -53px;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      .shop-name {
        position: relative;
        text-align: center;
        font-weight: 700;
      }
      .shop-mes {
        text-align: center;
        font-size: 10px;
        margin-top: 6px;
      }
    }
  }
}
.shoptab {
  position: relative;
  height: 35px;
  background-color: #fff;
  .tab {
    width: 33%;
    line-height: 35px;
    text-align: center;
    float: left;
    color: #666666;
  }
  .active {
    color: #000000;
  }
  .link {
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: #2395ff;
    bottom: 0;
  }
}
</style>

