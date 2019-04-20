<template>
  <div>
    <!-- 推荐 -->
    <div class="groom">
      <div class="groom_l">
        <h2>品质套餐</h2>
        <p>搭配齐全吃得好</p>
        <a href="#" class="d">立即抢购 ></a>
      </div>
      <div class="groom_r">
        <img
          src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
        >
      </div>
    </div>
    <!-- 会员 -->
    <div class="member">
      <a href="#">
        <div class="member_l">
          <i class="iconfont icon-huiyuan"></i>
          <span class="yuan">超级会员 .</span>
          <span class="yuan">每月领20元红包</span>
        </div>
        <div class="member_r">
          <span class="mai">立即开通 ></span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
/* 推荐 */
.groom{
	display: flex;
	justify-content: space-between;
	width: 3.55rem;
	height: 1.1rem;
	margin: .05rem .1rem .03rem;
	background: #f9f9f9;
	box-sizing: border-box;
	padding: .14rem .19rem 0 .16rem;
}
.groom_l h2{
	font-size: .16rem;
	color: #333333;
	font-weight: bold;
}
.groom_l p{
	color: #777777;
}
.groom_l a{
	font-size: .11rem;
	color: #af8260;
	font-weight: bold;
}
.groom_r img{
	width: 1.33rem;
	height: .78rem;
}
/* 会员 */
.member{
    display: flex;
   justify-content: space-around;

}
.member a{
	
	width: 3.55rem;
	height: .4rem;
	margin: .05rem .1rem .03rem;
	background: #feeec2;
	box-sizing: border-box;
	padding: .09rem .1rem 0 .16rem;
}
.member_l span:nth-of-type(1){
	font-weight: bold;
	font-size: .13rem;
	color: #644f1b;
}
.icon-huiyuan{
	color: #d9b365;
  margin-right: 0.1rem;
 font-size: 0.18rem;
}
.yuan{
  color: #d9b365;
}
.mai{
   color: #d9b365;
}

</style>
