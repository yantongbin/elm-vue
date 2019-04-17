<template>
  <div>
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li class="list">
            <span>热销</span>
          </li>
          <li class="list">
            <span>主食</span>
          </li>
        </ul>
      </div>
      <div class="menu-right">
        <ul>
          <li>
            <van-card
              tag="标签"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              :thumb="imageURL"
              style="background-color: #fff; "
            >
              <div slot="footer">
                <van-stepper v-model="value"/>
              </div>
            </van-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      imageURL: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  .menu-left {
    width: 74px;
    height: 100%;
    background-color: #f8f8f8;
    ul {
      li:nth-child(1) {
        background-color: #fff;
      }
      .list {
        padding: 17px 7px;
        font-size: 11px;
      }
    }
  }
  .menu-right {
    flex-grow: 1;
    background-color: #fff;
    ul {
      li {
        padding-left: 10px;
      }
    }
  }
}
</style>

