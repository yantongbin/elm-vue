<template>
  <div>
    <!-- 头部 -->
    <div id="header">
      <div class="adderss">
        <a href="#">
          <i class="iconfont icon-icon-"></i> 袋鼠公寓
          <i class="iconfont icon-f11-copy"></i>
        </a>
      </div>
      <div class="search">
        <a href="#">
          <i class="iconfont icon-fangdajing"></i> 搜索饿了么商家、商品名称
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
    .iconfont{
	font-size: .16rem !important;
}
#header{
  height: .96rem;
  box-sizing: border-box;
  background: #00a7ff;
  border-bottom: 1px solid #80cdff;
  padding: 0 .14rem 0 .14rem;
}
.adderss{
	padding: .15rem 0 .1rem 0;
}
.adderss a{
	font-weight: 700;
  font-size: .16rem;
  color: white;
}
.search{
	width: 3.47rem;
	height: .37rem;
	line-height: .35rem;
	border-bottom: 1px solid #80c5ff;
	box-sizing: border-box;
	background: white;
	text-align: center;
}
.search a{
	color: #999999;
	font-size: .14rem;
}
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
.member a{
	display: flex;
	justify-content: space-between;
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
.icon-huangguan{
	color: #d9b365;
}
</style>
