<template>
  <div>
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li class="list" v-for="item in category" :key="item.id">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="menu-right" style="margin-bottom: 50px">
        <ul>
          <li v-for="foods in shopList" :key="foods.item_id">
            <van-card
              tag="标签"
              desc="描述信息"
              title
              :thumb="'//elm.cangdu.org/img/'+foods.image_path "
              style="background-color: #fff; "
            >
              <div slot="desc">{{foods.tips}}</div>
              <div slot="title">{{foods.name}}</div>
              <div slot="price">￥{{foods.satisfy_rate}}</div>
              <div slot="tags" style="margin-bottom:20px; margin-top: 5px;"></div>
              <div slot="footer">
                <van-button size="mini" @click="ceil(shopList)">-</van-button>
                <span></span>
                <van-button size="mini" @click="add(shopList)">+</van-button>
              </div>
            </van-card>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footer-list">
        <van-actionsheet v-model="show" title="购物车" style="margin-bottom:50px;">
          <div class="content">
            <ul>
              <li>
                <span class="main-title">商品</span>
                <i class="main-ceil">￥</i>
                <van-button size="mini">-</van-button>
                <span>1</span>
                <van-button size="mini">+</van-button>
              </li>
              <li>
                <span class="main-title">商品</span>
                <i class="main-ceil">￥</i>
                <van-button size="mini">-</van-button>
                <span>1</span>
                <van-button size="mini">+</van-button>
              </li>
              <li>
                <span class="main-title">商品</span>
                <i class="main-ceil">￥</i>
                <van-button size="mini">-</van-button>
                <span>1</span>
                <van-button size="mini">+</van-button>
              </li>
            </ul>
          </div>
        </van-actionsheet>
      </div>
      <van-goods-action style="z-index:9999">
        <van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickMiniBtn"/>
        <van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn" to="/orderform"/>
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      value: 0,
      imageURL: '',
      category: [],
      shopList: [],
      show: false,
      actions: [
        {
          name: '选项'
        }
      ],
      catData: []
    }
  },
  computed: {},
  methods: {
    onClickMiniBtn () {
      this.show = true
    },
    onClickBigBtn () {},
    onSelect () {
      this.show = false
    },
    getList () {
      Axios.get('https://elm.cangdu.org/shopping/v2/menu', {
        params: {
          restaurant_id: 1
        }
      }).then(res => {
        let data = res.data
        if (res.status === 200) {
          this.category = data
          for (var i = 0; i < 10; i++) {
            this.shopList = data[4].foods
          }
        } else {
          alert('msg')
        }
      })
    },
    add (data) {
      var index = this.catData.findIndex(item => item.id === data.id);
      if(index > -1){
        this.catData[index].num += 1
      }else{
        this.catData.push(Object.assign({}, data, { num: 1 }))
      }
      console.log(this.catData);
    },
    ceil (data) {

    }
  },
  created () {
    this.getList()
  }
}
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
.footer {
  position: relative;
  .footer-list {
    .content {
      ul {
        li {
          padding: 7px 0;
          padding-right: 12px;
          display: flex;
          .main-title {
            flex: 5.5;
          }
          .main-ceil {
            flex: 2.5;
          }
          .main-num {
            flex: 3;
          }
        }
      }
    }
  }
}
</style>
