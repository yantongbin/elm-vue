<template>
  <div class="discover">
    <section class="parts unmerge">
      <div class="entry list3">
        <a href="https://h5.ele.me/exchange/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
            <p class="tips">0元好物在这里</p>
          </div>
          <img loading class="icon" src="9c9aea0e856149083d84af3444b78jpeg.jpeg">
          <img style="display: none;">
        </a>
        <a href="https://h5.ele.me/commend/#/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
            <p class="tips">10元现金拿不停</p>
          </div>
          <img loading class="icon" src="7232274c3c1934861abb86ba32b7bjpeg.jpeg">
          <img style="display: none;">
        </a>
        <a href="/discover/koubei/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
            <p class="tips">领取口碑好券</p>
          </div>
          <img loading class="icon" src="2351e989d4171479ba0d7b5c06053jpeg.jpeg">
          <img style="display: none;">
        </a>
      </div>
      <!---->
    </section>

    <section>
      <div class="activity-header">
        <span class="line left"></span>
        <svg class="activity-icon">
          <use xlink:href="#alarm"></use>
        </svg>
        限时好礼
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">金币换豪礼</p>
      <div class="activity-body">
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="0"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img src="adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg" width="324" height="322">
          <div>
            <p class="food-name ui-ellipsis">3元品质联盟红包</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>90金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥3</del>
              </div>
            </div>
          </div>
          <span class="discount">限时优惠</span>
        </a>
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="1"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img src="5c1ca7ceca079926933ca418c9eb7jpeg.jpeg" width="324" height="322">
          <div>
            <p class="food-name ui-ellipsis">扫地机器人</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>9金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥99</del>
              </div>
            </div>
          </div>
          <span class="discount">特价换购</span>
        </a>
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="2"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img src="605a11eae79849240113271dd1b94jpeg.jpeg" width="324" height="322">
          <div>
            <p class="food-name ui-ellipsis">电动针灸按摩仪</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>180金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥239</del>
              </div>
            </div>
          </div>
          <span class="discount">特价换购</span>
        </a>
      </div>
      <div class="activity-recommend wall-16TaH"></div>
      <!---->
      <p class="activity-more">
        <a href="https://h5.ele.me/exchange/">查看更多</a>
        <svg class="svg-next">
          <use xlink:href="#tab_found_next_page"></use>
        </svg>
      </p>
    </section>
  </div>
</template>


 <script>
export default {};
</script>


 <style scoped>
   *,
:after,
:before {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent
}

html {
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #333;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  line-height: 1.2;
  -webkit-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  font-size: 36px
}

body,
button,
dd,
dl,
ol,
ul {
  margin: 0;
  padding: 0
}

ol,
ul {
  list-style: none
}

a {
  outline: none;
  color: inherit;
  text-decoration: none
}

a,
img {
  -webkit-touch-callout: none
}

button,
input,
select,
textarea {
  outline: none;
  border: none;
  font-size: inherit;
  font-family: inherit
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-weight: 400
}

img {
  max-width: 100%
}

button {
  margin: 0;
  padding: 0
}

button,
input {
  outline: none;
  border: none;
  font-size: inherit;
  font-family: inherit
}

.discover {
  padding-bottom: 0.47px;
}

section {
  margin-bottom: 10px;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.47px solid #eee;
}

section.parts {
  border-bottom: none;
  background: transparent none repeat 0 0/auto auto padding-box border-box scroll;
  background: initial
}

.unmerge>.entry:first-child {
  margin-bottom: 10px;
}

.unmerge>.entry:last-child {
  border-top: 1px solid #ededed
}

.entry {
  border-width: 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap
}

.entry:first-child {
  border-top: 0
}

.entry .content-wrapper {
  max-width: 108px;
}

.entry a {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 76px;
  padding: 14px;
  border-bottom: 1px solid #ededed
}

.entry .sub-pic-hash {
  height: 86px;
  padding: 0
}

.entry .sub-pic-hash img {
  width: 100%
}

.entry .icon {
  width: 57px;
}

.entry .title {
  line-height: 1.2;
  font-size: 15px;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.entry .title img {
  width: 17px;
  margin-right: 2px;
  vertical-align: middle
}

.entry .tips {
  line-height: 1.2;
  font-size:11px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.entry.list2 a:first-child,
.entry.list3 a:first-child {
  border-right: 1px solid #ededed
}

.entry.list2 a {
  width: 50%;
  float: left
}

.entry.list2 a:nth-child(odd) {
  border-right: 1px solid #ededed
}

.entry.list2 .icon {
  width:43px;
}

.entry.list3 {
  position: relative
}

.entry.list3 a {
  width: 50%
}

.entry.list3 a:nth-child(3n+1) {
  border-right: 1px solid #ededed
}

.entry.list3 .icon {
  width:43px;
}

.entry.list3 a:first-child {
  position: absolute;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-align-items: normal;
  align-items: normal;
  height:153px;
  padding: 21px 10px 5px 15px;
}

.entry.list3 a:first-child .icon {
  -webkit-align-self: flex-end;
  align-self: flex-end;
  width:72px;
}

.entry.list3 a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%
}

.entry.list2 .sub-pic-hash,
.entry.list3 .sub-pic-hash {
  width: 100%
}

.activity-header {
  padding-top: 18px;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: #333
}

.activity-icon {
  position: relative;
  top: 2px;
  width: 15px;
  height: 15px;
}

.line {
  display: inline-block;
  margin: 7px 3px 6px;
  border: 1px solid #333;
  transform: scaleY(0.5);
  width: 14px;
  height: 0;
  position: relative
}

.line:after {
  position: absolute;
  top: -2px;
  content: "";
  background: #333;
  height: 4px;
  width:4px;
  border-radius: 50%
}

.line.left:after {
  right: -2px;
}

.line.right:after {
  left: -2px;
}

.activity-sub-title {
  font-size: 10px;
  color: #999;
  text-align: center;
  padding-bottom: 7px;
}

.activity-more,
.gift-list-more {
  font-size: 12px;
  color: #999;
  text-align: center;
  padding: 14px 0 17px;
}

.activity-more {
  padding-top: 0
}

.activity-body {
  padding: 11px 0 14px 14px;
  white-space: nowrap
}

.discover-food {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 106px;
  margin-right: 5px;
}

.discover-food img {
  width: 155px;
  height: 105px;
  margin-bottom: 9px;
}

.discover-food .discount {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  color: #fff;
  background: #413d3c;
  padding: 2px;
}

.discover-food .food-name {
  font-size: 12px;
  color: #333;
  margin-bottom: 4px;
}

.discover-food .food-price {
  height: 23px;
  line-height: 23px;
}

.discover-food .price {
  font-size: 12px;
  height: 17px;
  line-height: 17px;
  color: #ff5339;
  margin-right: 3px;
  max-width: 48px;
  display: inline-block;
  vertical-align: middle
}

.discover-food .price .yuan {
  font-size: 10px
}

.discover-food .original-price {
  font-size:10px;
  color: #aaa;
  max-width:38px;
  display: inline-block;
  vertical-align: middle
}

.discover-food .grab {
  float: right;
  font-size: 14px;
  color: #fff;
  background: #f94843;
  padding: 4px 12px;
  border-radius: 3px;
  line-height: 14px;
}



.svg-next {
  height: 8px;
  width: 4px;
  margin-left: 5px;
}
</style>

