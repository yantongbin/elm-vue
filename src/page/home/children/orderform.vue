<template>
  <div>
    <div>
      <van-card
        num="1"
        price="2.00"
        desc="描述信息"
        title="川味家常菜"
        currency="￥"
        :thumb="imageURL"
        origin-price="10.00"
      >
        <div slot="tags">
          <van-tag round>标签</van-tag>
          <van-tag round>标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">催单</van-button>
          <van-button size="mini">退单</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageURL: 'https://fuss10.elemecdn.com/c/6f/1c440d82187bbc022fbd2fb29d8dajpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/'
    }
  }
}
</script>
