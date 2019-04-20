<template>
  <div id="renderRoot">
        <section class="floor-elm-top"> <a class="credits" href="javascript:;"> <i class="i-credits"></i> <span
                    class="note">金币 <span class="number " id="db-credits-num">0</span> </span> </a> <a class="records">
                <i class="i-records"></i> <span class="note"> 兑换记录 </span> </a> </section>

        <section class="floor-banner a-fadeinT">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="//yun.duiba.com.cn/images/201904/z8yi22b5cj.jpeg?x-oss-process=image/format,webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="//yun.duiba.com.cn/images/201904/solme38wgw.jpg?x-oss-process=image/format,webp" alt=""></van-swipe-item>
            <van-swipe-item><img src="//yun.duiba.com.cn/images/201808/fh9iw1evwk.jpg?x-oss-process=image/format,webp" alt=""></van-swipe-item>
          </van-swipe>
        </section>

        <section class="floor-icon a-fadeinT" style="height: auto;">
            <div class="scroll" style="height: auto;">
                <div class="scroll-x" style="width: 100%;">
                    <div id="J_iconList"> <a class="icon-a icon8 icon-large"> <img
                                src="//yun.duiba.com.cn/developer/img/custom_default_icon.png" alt="">
                            <p>0元兑换</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/developer/img/custom_default_icon.png" alt="">
                            <p>会员专区</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/images/201707/gawmi0zjp2.jpg" alt="">
                            <p>红包专区</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/images/201611/by82zpc962.png" alt="">
                            <p>优惠礼券</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/images/201611/e2gpweapqd.png" alt="">
                            <p>数码家电</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/images/201611/q4eion0i4l.png" alt="">
                            <p>日常家居</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/images/201611/yrvj0axxff.png" alt="">
                            <p>食品饮料</p>
                        </a> <a class="icon-a icon8 icon-large"> <img src="//yun.duiba.com.cn/images/201611/5glf4cj3io.png" alt="">
                            <p>个护美妆</p>
                        </a> </div>
                </div>
            </div>
        </section>
        <section class="floor-showcase a-fadeinT"> <a class="main-showcase"> <img src="//yun.duiba.com.cn/images/201812/sch8war88p.png"
                    alt=""> </a>
            <div class="side-showcase"> <a>
                    <div class="top-showcase"> <img src="//yun.duiba.com.cn/images/201812/qzplbj7kho.jpeg" alt=""> </div>
                </a> <a>
                    <div class="bottom-showcase"> <img src="//yun.duiba.com.cn/images/201808/iq43cwcj43.jpg" alt=""> </div>
                </a> </div>
        </section>
        <section class="floor-item a-fadeinT">
            <div class="floor-item-header"> 大家都在兑 </div>
            <div id="J_itemList" class="item-con">
                <a>
                    <div class="info-wrap">
                        <h3 class="item-title">5元品质联盟专享红包</h3> <span class="item-credits">150<span
                                class="unitName">金币</span></span>
                    </div>
                    <div class="img-wrap"> <img src="//yun.duiba.com.cn/images/201809/u6n88klhf4.jpg"> </div>
                </a>
                <a>
                    <div class="info-wrap">
                        <h3 class="item-title">5元品质联盟专享红包</h3> <span class="item-credits">150<span
                                class="unitName">金币</span></span>
                    </div>
                    <div class="img-wrap"> <img src="//yun.duiba.com.cn/images/201903/nkyfuxz90v.jpg"> </div>
                </a>
                <a>
                    <div class="info-wrap">
                        <h3 class="item-title">5元品质联盟专享红包</h3> <span class="item-credits">150<span
                                class="unitName">金币</span></span>
                    </div>
                    <div class="img-wrap"> <img src="//yun.duiba.com.cn/images/201809/u6n88klhf4.jpg"> </div>
                </a>
                <a>
                    <div class="info-wrap">
                        <h3 class="item-title">5元品质联盟专享红包</h3> <span class="item-credits">150<span
                                class="unitName">金币</span></span>
                    </div>
                    <div class="img-wrap"> <img src="//yun.duiba.com.cn/images/201903/nkyfuxz90v.jpg"> </div>
                </a>
                <a>
                    <div class="info-wrap">
                        <h3 class="item-title">5元品质联盟专享红包</h3> <span class="item-credits">150<span
                                class="unitName">金币</span></span>
                    </div>
                    <div class="img-wrap"> <img src="//yun.duiba.com.cn/images/201809/u6n88klhf4.jpg"> </div>
                </a>
                <a>
                    <div class="info-wrap">
                        <h3 class="item-title">5元品质联盟专享红包</h3> <span class="item-credits">150<span
                                class="unitName">金币</span></span>
                    </div>
                    <div class="img-wrap"> <img src="//yun.duiba.com.cn/images/201903/nkyfuxz90v.jpg"> </div>
                </a>
            </div>
        </section>
    </div>
</template>

<script>

export default {
  data () {
    return {
      current: 0
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    }
  }
}
</script>

<style scoped>
  body,
input {
  width: 100%
}

*,
a:active {
  outline: 0
}

.placeholder,
button,
html,
input,
textarea {
  font-family: 'Helvetica Neue', Helvetica, Hiragino Sans GB, 'Microsoft Yahei', STHeiTi, Arial, sans-serif
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased
}

body {
  font-size: 12px;
  line-height: 1;
  overflow-x: hidden;
  max-width: 640px;
  margin: 0 auto;
  color: #333;
  background-color: #f0f0f0;
  -webkit-overflow-scrolling: touch;
  -webkit-touch-callout: none
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block
}

a {
  text-decoration: none;
  color: inherit;
    float: left;
}

b,
strong {
  font-weight: 700
}

dfn {
  font-style: normal
}

img {
  max-width: 100%;
  vertical-align: middle;
  border: 0
}

button,
input,
textarea {
  font-size: 4.5px;
  margin: 0;
  padding: 0;
  border: 0
}

textarea {
  resize: none
}

table {
  border-spacing: 0;
  border-collapse: collapse
}

td,
th {
  padding: 0
}

blockquote,
figure,
form,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0
}

dd,
dl,
li,
ol,
ul {
  margin: 0;
  padding: 0
}

li,
ol,
ul {
  list-style: none
}

input {
  height: 7px;
  padding: 2px;
  text-align: left;
  border: 1px solid #ddd;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  -webkit-appearance: none
}

.floor-banner {
  width: 100%;
  height: 157px;
  overflow: hidden
}

body {
  max-width: 750px !important;
  background: #f6f6f6 !important
}

.floor-icon {
  position: relative;
  background: #FFF;
  width: 100%;
  margin-bottom: 9px;
  padding-top: 14px;
  overflow: hidden
}

.floor-icon .icon-a {
  float: left;
  text-align: center;
  margin-bottom: 14px
}

.floor-icon .icon-a.icon3 {
  width: 118px
}

.floor-icon .icon-a.icon-large {
  width: 86px
}

.floor-icon .icon-a img {
  width: 42px;
  height: 42px;
  margin-bottom: 7px;
  border-radius: 100%
}

.floor-icon .icon-a p {
  font-family: PingFangSC-Regular;
  font-size:11px;
  color: #666;
  letter-spacing: 0
}

.scroll {
  width: 100%;
  height: 87px;
  overflow: auto;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch
}

.scroll .scroll-x {
  width: 11250px
}

.floor-showcase {
  width: 100%;
  margin: 4px 0;
  background: #fff;
  position: relative;
  border: solid #EEE;
  border-width: 1px 0;
  min-height: 121px
}

.floor-showcase a {
  display: block
}

.floor-showcase img {
  width: 100%;
  height: 100%
}

.floor-showcase .main-showcase {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 180px;
  height:120px;
  overflow: hidden;
  border-right: 1px solid #EEE
}

.floor-showcase .main-showcase .showcase-countdown {
  display: none;
  font-size: 11px;
  position: absolute;
  top: 55px;
  left: 10px;
  background: rgba(51, 51, 51, 0.9);
  border-radius: 2px;
  min-width: 78px;
  height: 16px;
  line-height: 16px;
  padding: 2px;
  text-align: center;
  color: #FFF;
  white-space: nowrap;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  color: #979797
}

.floor-showcase .main-showcase .showcase-countdown .countdown-time {
  margin-left: 2px;
  color: #FFF
}

.floor-showcase .side-showcase {
  padding-left:181px;
  overflow: hidden
}

.floor-showcase .side-showcase .top-showcase {
  width: 179px;
  height: 60px;
  border-bottom: 1px solid #EEE
}

.floor-showcase .side-showcase .bottom-showcase {
  width: 179px;
  height: 60px
}

.floor-item {
  margin-bottom: 5px;
  background: #fff
}

.floor-item .floor-item-header {
  position: relative;
  height: 33px;
  line-height:33px;
  padding-left:13px;
  background-color: #fff;
  font-size: 12px;
  color: #666
}

.floor-item .item-con {
  *zoom: 1
}

.floor-item .item-con>.item {
  float: left;
  position: relative;
  background: #fff;
  width: 50%;
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  overflow: hidden
}

.floor-item .item-con>.item:nth-child(2n) {
  border-right: 0
}

.floor-item .item-con .img-wrap {
  width: 100%;
  padding: 0 14px 14px 14px
}

.floor-item .item-con .img-wrap img {

  height: 93px
}

.floor-item .item-con .info-wrap {
  padding: 10px 5px 0px 13px;
  min-height: 55px
}

.floor-item .item-con .item-title {
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  color: #333;
  text-align: left;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.floor-item .item-con .item-credits {
  font-size: 12px;
  position: relative;
  display: inline-block;
  vertical-align: top
}

.floor-item .item-con .item-credits .unitName {
  font-size: 10px;
  color: #999;
  padding-left:2px
}

.floor-item .item-con .corner {
  font-size: 11px;
  color: #fff;
  padding: 1px 3px;
  margin-left: 3px;
  border-radius: 2px;
  text-align: center;
  vertical-align: top;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: inline-block
}

.floor-item .item-con:before,
.floor-item .item-con:after {
  display: table;
  content: ""
}

.floor-item .item-con:after {
  clear: both
}

a.records .note {
  position: relative
}

body {
  margin: 0 auto
}

.floor-elm-top {
  display: table;
  height: 42px;
  width: 100%;
  padding: 11px 0;
  background-color: #fff;
  margin-bottom: 9px
}

.floor-elm-top a {
  display: table-cell;
  padding: 1px 0;
  text-align: center;
  width: 50%
}

.floor-elm-top a i {
  display: inline-block;
  width: 2px;
  height: 1px;
  vertical-align: middle
}

.floor-elm-top a .note {
  vertical-align: middle;
  font-size: 13px
}

.floor-elm-top a.credits {
  border-right: 1px solid #e5e5e5
}

.floor-elm-top a.credits .number {
  font-size: 14px
}
</style>
