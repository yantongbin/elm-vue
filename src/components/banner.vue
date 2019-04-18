<template>
<!-- 导航 -->
<div>
  <div class="banner">
  	<ul>
  		<li>
  			<a href="#">
  				<img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
            <span class="title">美食</span>
  			</a>
        
  		</li>
  		<li>
  			<a href="#">
  				<img src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				 <span class="title">商超便利</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				 <span class="title">水果</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				<span class="title">医药健康</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				<span class="title">浪漫鲜花</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				 <span class="title">汉堡披萨</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				<span class="title">厨房生鲜</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  				<img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
  				 <span class="title">炸鸡炸串</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				 <span class="title">地方蔬菜</span>
  			</a>
  		</li>
  		<li>
  			<a href="#">
  			<img src="https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
  				 <span class="title">麻辣烫</span>
  			</a>
  		</li>
  	</ul>
  	<div class="banner_b">
  		<span class="banner_b_active"></span>
  		<span></span>
  	</div>
  </div>
</div>
</template>
<script>
export default {
  //  props:{
  //      banners:{
  //          type:Array    
  //      }
  //  }
}
</script>
<style>

    /* 导航 */
.banner{
	height: 1.68rem;
}
.banner ul{
	margin-bottom: .1rem;
}
.banner ul li{
	float: left;
	margin-top: .02rem;
	width: 20%;
	height: .75rem;
}
/*.banner ul{
	display: flex;
	flex-wrap: wrap;
	margin-bottom: .1rem;
	justify-content: space-around;
}*/
/*.banner ul li{
	margin-top: .02rem;
	width: 20%;
	height: .75rem;
}*/
.banner img{
	width:.5rem;
	height: .5rem;
}
.banner a{
	display: flex;
	flex-direction: column;
    align-items: center;
    color: #666;
}
.title{
	font-size:0.12rem 
}
.banner_b{
	display: flex;
	justify-content: center;
	align-items: center;
}
.banner_b span{
	display: block;
	margin-right: .05rem;
	width: .09rem;
	height: .02rem;
	background: #cccccc;
}
.banner_b_active{
	background: #ccedff !important;
}

</style>



