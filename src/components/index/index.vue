<template>
<div class="index-compont">
  <div class="goodsdeitles">
    <router-view></router-view>
  </div>

  <div v-if="$route.path!=='/index/detial'">

    <v-title :title="'首页'"></v-title>

    <div class="sh-continer">

        <v-banner :imglist="imgNameList"></v-banner>

      <div class="sh-menu">
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-news">
          <span>时尚资讯</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-brand">
          <span>品牌推荐</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-customize">
          <span>1919定制</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-overlook">
          <span>冰川俯视</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-famale">
          <span>女装</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-man">
          <span>男装</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-server">
          <span>定制服务</span>
        </div>
        <div class="sh-menu-list sh-menu-list-bg sh-meun-list-menu">
          <span>分类</span>
        </div>
      </div>

      <div class="sh-10line"></div>

        <v-moretitle :title="'更多资讯'" :showMore="true" :router="moreData.router"></v-moretitle>

        <v-news></v-news>

      <div class="sh-10line"></div>
        <v-moretitle :title="'猜你喜欢'" :showMore="true" ></v-moretitle>
      <v-pic></v-pic>

      <v-batch></v-batch>

      <div class="sh-10line"></div>

      <v-fullimg></v-fullimg>

      <div class="sh-10line"></div>
      <v-moretitle :title="'品牌推荐'" :showMore="true" ></v-moretitle>
      <v-logolist :listImgUrl="logolist"></v-logolist>
  </div>

    </div>
</div>
</template>

<script>
import vNews from '@/components/Ui_component/news/news';
import vBanner from '@/components/Ui_component/banner/banner';
import vTitle from '@/components/Ui_component/title/title';
import vMoretitle from '@/components/Ui_component/moretitle/moretitle';
import vPic from '@/components/Ui_component/pic/pic';
import vBatch from '@/components/Ui_component/batch/batch';
import vFullimg from '@/components/Ui_component/fullimg/fullimg';
import vLogolist from '@/components/Ui_component/logolist/logolist';
export default {
  components: {
      vNews,
      vBanner,
      vTitle,
      vMoretitle,
      vPic,
      vBatch,
      vFullimg,
      vLogolist
  },
  data(){
    return {
      isHsow: true,
      imgNameList: [
        {url: '/static/img/图层-8@2x.png'},
        {url: '/static/img/图层-6@2x.png'}
      ],
      moreData: {
        router: {
          goRouter: 'detial',
          whenRouterHide: '/index/detial',
          query: {id: 123}
        }
      },
      logolist: [
        {url: '/static/img/logo4@2x.png'},
        {url: '/static/img/logo4@2x.png'},
        {url: '/static/img/logo4@2x.png'}
      ]
    };
  },
  mounted(){
    this.interface.getImgUrl('123').then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    openDetial(){
      this.$router.replace({name: 'detial', query: {id: '123'}});
      this.$store.commit('removeFooterMenu', '/index/detial');
    }
  },
  beforeRouteLeave(to, from, next){
    let position = window.scrollY;
    this.$store.commit('saveScrollList_index', position);
    next(vm => {
      this.$router.replace(to.path);
    });
  },
  activated(){
    let scrollY = this.$store.state.scrollList.index;
    window.scroll(0, scrollY);
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
