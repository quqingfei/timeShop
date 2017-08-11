<template>
  <div clsss="bggary" style="background-color:#f0f0f0;
    min-height:100vh;">
    <div class="sh-order">
      <div class="sh-header">
        <span><img class="settings" src="/static/img/setting@2x.png" alt=""/></span>
        <span><img class="chats" src="/static/img/chat@2x.png" alt=""/></span>
      </div>
      <div class="sh-pic">
        <div class="sh-headimg">
          <img src="/static/img/d9d38ed7ab9cd54726ef4ada8dda0781@2x.png" alt=""/>
        </div>
        <div class="sh-pic-title">
          <h3>张三&nbsp;&nbsp;<span>[买家]</span></h3>
          <p>用户ID:123456789654</p>
        </div>
      </div>
      <div class="sh-right">
        <h3><font>升级为商家</font>&nbsp;&nbsp;| &nbsp;&nbsp;<span @click="goLogin">退出登录</span></h3>
      </div>
    </div>
    <v-nav :nav_title="nav_title"></v-nav>
    <v-orderstatus :orderStatus="orderStatus1"></v-orderstatus>
    <v-navA :items="items1"></v-navA>
    <v-navA :items="items2"></v-navA>
  </div>
</div>
</template>
<script>
  import vNav from '@/components/Ui_component/nav/nav';
  import vNavA from '@/components/Ui_component/navA/navA';
  import vOrderstatus from '@/components/Ui_component/orderstatus/orderstatus';

  export default {
    components: {
      vNav,
      vNavA,
      vOrderstatus
    },
    data() {
      return {
        nav_title: {
          left_title: '我的订单',
          right_title: '全部订单'
        },
        items1: [{
          links: null,
          texts: '我的收藏'
        }, {
          links: null,
          texts: '我的优惠券'
        }, {
          links: null,
          texts: '我的店铺'
        }],
        items2: [{
          links: null,
          texts: '地址管理'
        }, {
          links: null,
          texts: '微信号绑定'
        }, {
          links: null,
          texts: '账号安全'
        }],
        orderStatus1: [{
          title: '待付款',
          icon: '/static/img/待付款_1@2x.png',
          link: null,
          status: ''
        }, {
          title: '待发货',
          icon: '/static/img/待发货@2x.png',
          link: null,
          status: '1'
        }, {
          title: '待收货',
          icon: '/static/img/待收货@2x.png',
          link: null,
          status: ''
        }, {
          title: '待退款',
          icon: '/static/img/退换货@2x.png',
          link: null,
          status: ''
        }]
      };
    },
    methods: {
      goLogin() {
        this.$router.replace({name: 'login'});
        this.$store.commit('removeFooterMenu', '/login');
      }
    },
    beforeRouteLeave(to, from, next) {
      let position = window.scrollY;
      this.$store.commit('saveScrollList_user', position);
      next(vm => {
        this.$router.replace(to.path);
      });
    },
    activated() {
      let scrollY = this.$store.state.scrollList.user;
      window.scroll(0, scrollY);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '/static/css/mine.css'
</style>
