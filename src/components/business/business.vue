<template>
<div>
        <v-title :title="'商家首页'" :back="true"></v-title>
        <v-search :logoShow="true" :vtext="'输入商品关键词搜索'"></v-search>
        <v-crossmenu :muneList="munelist" :bgColor="'#2a2a2a'" :fontcolor="'white'"></v-crossmenu>
        <div class="banner">
          <v-banner :imglist="imgNameList"></v-banner>
        </div>
       <v-moretitle :title="'热销商品'" :showMore="true" ></v-moretitle>
      <v-news></v-news>
      <div class="sh-10line"></div>
      <v-moretitle :title="'商品展示'" :showMore="true" ></v-moretitle>
      <v-doublecard :dataList="datalist"></v-doublecard>
</div>
</template>

<script>
import Swiper from 'swiper';
import vBanner from '@/components/Ui_component/banner/banner';
import vTitle from '@/components/Ui_component/title/title';
import vNews from '@/components/Ui_component/news/news';
import vSearch from '@/components/Ui_component/search/search';
import vMoretitle from '@/components/Ui_component/moretitle/moretitle';
import vCrossmenu from '@/components/Ui_component/crossmenu/crossmenu';
import vDoublecard from '@/components/Ui_component/doublecard/doublecard';
export default {
    components: {
        vBanner,
        vNews,
        vTitle,
        vSearch,
        vCrossmenu,
        vMoretitle,
        vDoublecard
    },
    data() {
      return {
        imgNameList: [
          {url: '/static/img/图层-8@2x.png'},
          {url: '/static/img/图层-6@2x.png'}
        ],
        munelist: [
            {name: '全部商品', link: null},
            {name: '热销商品', link: null},
            {name: '最近新品', link: null},
            {name: '商品分类', link: null}
        ],
        datalist: [
            {name: '无袖修长米色时尚长款可多穿风衣', link: null, price: 1980.00, oldPrice: 5999.00},
            {name: '无袖修长米色时尚长款可多穿风衣', link: null, price: 1980.00, oldPrice: 5999.00}
        ]
      };
    },
    mounted(){
      var mySwiper1 = new Swiper('#header', {
        freeMode: true,
        slidesPerView: 'auto',
        freeModeSticky: true,
        preventLinksPropagation: false
      });
    }
    /* ,
    beforeRouteLeave(to, from, next){
        let position = window.scrollY;
        this.$store.commit('saveScrollList_shop', position);
        next(vm => {
          this.$router.replace(to.path);
        });
    },
    activated(){
        let scrollY = this.$store.state.scrollList.shop;
        window.scroll(0, scrollY);
    } */
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.sh-title
  border-bottom 1px solid #f0f0f0
</style>
