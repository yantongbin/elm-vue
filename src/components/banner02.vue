<template>
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
       <img class="index-1eegU_1" src="https://fuss10.elemecdn.com/3/9f/08b15c6f10c11d8fe6ab921ef4fdejpeg.jpeg?imageMogr/format/webp/thumbnail/568x/">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

  <!-- Swiper JS
  <script src="../dist/js/swiper.min.js"></script>-->
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}
</script>
<style>
.swiper-slide{
    width: 3.6rem;
	height: .9rem;
    text-align: center;

}
.swiper-slide img{
	height: 0.9rem;
}

</style>
