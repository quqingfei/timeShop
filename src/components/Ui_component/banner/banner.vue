<template>
<span>
  <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="imglist">
            <div class="swiper-slide" v-for="item in imglist"><img :src="item.url" alt=""></div>
        </div>
    </div>
  </div>

</span>
</template>

<script>
import Swiper from 'swiper';
export default {
  props: {
    imglist: {
      type: Array
    }
  },
  mounted(){
    let mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000,
      loop: true
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
