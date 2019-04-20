<template>
    <div>
       <div class="list_b" v-for=" data in list"
       :key="data.name">
       <div class="seller_t">
       <img
             src="https://fuss10.elemecdn.com/4/ee/15627ce26bf60533e459b0299c9edpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"  >
      <div class="seller_t_r">
         <div class="seller_t_r1">
           <h3>
            <span>品牌</span>
            <span>尊宝比萨 （黄田店）</span>
           </h3>
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
   </div>
   </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {

      list: []//商家列表
    };
  },
  computed:{

  },
  methods: {
    getData() {
      Axios.get("https://elm.cangdu.org/shopping/restaurants", {
        params: {
          latitude: 22.61996,
          longitude: 113.843757,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        let datas = res.data;
        console.log(res);
        if(res.status===200){
          this.list=data.array.name

        }else{
          alert(datas.statusText)
        }
        // console.log(res)
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style>
.list_b {
  height: 1.77rem;
  border-bottom: 1px solid #f8f8f8;
  box-sizing: border-box;
  padding: 0.15rem 0.11rem 0 0.1rem;
}
.seller_t {
  display: flex;
  height: 0.64rem;
}
.seller_t img {
  width: 0.64rem;
  height: 0.64rem;
  margin-right: 0.1rem;
}
.seller_t_r {
  flex: 1;
}
.seller_t_r1 {
  display: flex;
  justify-content: space-between;
}
.seller_t_r1 h3 {
  color: #333333;
  font-size: 0.14rem;
}
.seller_t_r1 h3 span:nth-of-type(1) {
  display: inline-block;
  width: 0.3rem;
  height: 0.17rem;
  line-height: 0.16rem;
  background: #ffe920;
  font-size: 0.1rem;
  color: #6f3f15;
  text-align: center;
}
.seller_t_r3 {
  display: flex;
  justify-content: space-between;
}
.seller_b {
  margin-left: 0.74rem;
}
.seller_b1 span:nth-of-type(1) {
  margin-right: 0.6rem;
}
.seller_b2 {
  height: 0.14rem;
}
.seller_b3 {
  display: flex;
  justify-content: space-between;
}
.seller_b3l {
  /*margin-right: .53rem;*/
  width: 1.79rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.seller_b3l div span {
  display: inline-block;
  width: 0.14rem;
  line-height: 0.14rem;
  text-align: center;
  height: 0.14rem;
  font-size: 0.1rem;
  color: #fff;
  background: #f07373;
}
</style>


