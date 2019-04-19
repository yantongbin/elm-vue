<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
          >
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img
              src="https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            >
          </a>
        </div>
        <div class="swiper-slide">
          <img
            class="index-1eegU_1"
            src="https://fuss10.elemecdn.com/3/9f/08b15c6f10c11d8fe6ab921ef4fdejpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
          >
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 商家列表 -->
    <div class="list">
      <div class="list_t">
        <span></span>&nbsp;&nbsp;&nbsp;&nbsp;推荐商家&nbsp;&nbsp;&nbsp;&nbsp;
        <span></span>
      </div>
      <div class="list_c">
        <ul>
          <li>
            <a href="#" class="list_c_active">
              综合排序
              <i class="iconfont icon-xiajiantou"></i>
            </a>
          </li>
          <li>
            <a href="#">距离最近</a>
          </li>
          <li>
            <a href="#">品质联盟</a>
          </li>
          <li>
            <a href="#">
              筛选
              <i class="iconfont icon-shaixuan"></i>
            </a>
          </li>
        </ul>
      </div>

      <!-- <div class="list_b">
        <div class="seller_t">
          <img
            src="https://fuss10.elemecdn.com/4/ee/15627ce26bf60533e459b0299c9edpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
          >
          <div class="seller_t_r">
            <div class="seller_t_r1">
              <h3>
                <span>品牌</span>
                <span>尊宝比萨 （黄田店）</span>
              </h3>
              <span>···</span>
            </div>
            <div class="seller_t_r2">
              <span>☆ ☆ ☆ ☆ ☆</span>
              <span>4.8</span>
              <span>月售296单</span>
            </div>
            <div class="seller_t_r3">
              <div>
                <span>20 起送 |</span>
                <span>免配送费</span>
              </div>
              <div>
                <span>2.26km |</span>
                <span>46分钟</span>
              </div>
            </div>
          </div>
        </div>

        <div class="seller_b">
          <div class="seller_b1">
            <span>排骨饭</span>
            <span>品质联盟</span>
          </div>
          <div class="seller_b2"></div>
          <div class="seller_b3">
            <div class="seller_b3l">
              <div>
                <span>减</span> 满29减12，满49减25，满69减35，满99减42
              </div>
              <div>
                <span>折</span> 特价商品0.99元起
              </div>
            </div>
            <div class="seller_b3r">
              5个活动
              <i class="iconfont icon-xiajiantou"></i>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style>
.swiper-slide {
  width: 3.6rem;
  height: 0.9rem;
  text-align: center;
}
.swiper-slide img {
  height: 0.9rem;
}
/* 商家列表 */
.list {
  margin-bottom: 0.52rem;
}
.list_t {
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  color: #000000;
  font-size: 0.15rem;
  margin-bottom: 0.1rem;
}
.list_t span {
  display: inline-block;
  width: 0.21rem;
  height: 0.01rem;
  margin-bottom: 0.04rem;
  background: #999999;
}
.list_c ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.14rem;
}
.list_c_active {
  font-weight: bold;
}
</style>
