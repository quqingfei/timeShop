<template>
<span>
    <div id="header" class="border-1px" v-bind:style="{ backgroundColor: bgColor, color: fontcolor}">
        <div class="swiper-wrapper">
          <div v-for="(value,key) in muneList" class="swiper-slide" :class="{active: key==actived}" v-text="value.name" :href="value.link" @click="goActived(key)"></div>
        </div>
    </div>
</span>
</template>

<script>
import Swiper from 'swiper';

  export default {
    props: {
        muneList: {
            type: Array
        },
        bgColor: {
            default: 'white'
        },
        fontcolor: {
            default: 'black'
        }
    },
    data() {
        return {
            actived: 0
        };
    },
    mounted(){
      var mySwiper2 = new Swiper('#header', {
            freeMode: true,
            slidesPerView: 'auto',
            freeModeSticky: true,
            preventLinksPropagation: false
        });
    },
    methods: {
        goActived(index) {
            this.actived = index;
        }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
