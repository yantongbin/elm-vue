<template>
  <div>
    <div
      v-for="item in catData"
      :key="item.name"
    >
      <van-card
        :num="item.num"
        :title="item.name"
        :thumb="'//elm.cangdu.org/img/' + item.image_path"
        origin-price="10.00"
      >
        <div slot="desc">{{item.tips}}</div>
        <div slot="title">{{item.name}}</div>
        <div slot="price">￥{{item.satisfy_rate * item.num}} </div>
        <div slot="tags" style="margin-bottom:20px; margin-top: 5px;"></div>
        <div slot="footer">
          <van-button size="mini">催单</van-button>
          <van-button size="mini">退单</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      imageURL: 'https://fuss10.elemecdn.com/c/6f/1c440d82187bbc022fbd2fb29d8dajpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/'

    }
  },
  computed: {
    ...mapState(['catData'])
  }
}
</script>
