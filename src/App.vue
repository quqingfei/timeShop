<template>
<div>
<keep-alive>
  <router-view></router-view>
</keep-alive>
  <div v-if="$route.path!==removeRouterList" class="sh-footer">
    <div @click="_goToRouter(0)" :class="classA" class="sh-footer-bgcomm sh-footer-bgcomm-index"><span>首页</span></div>
    <div @click="_goToRouter(1)" :class="classB" class="sh-footer-bgcomm sh-footer-bgcomm-design"><span>设计师</span></div>
    <div @click="_goToRouter(4)" class="sh-footer-top">
    <font class="sh-top"><img class="sh-footer-bgcomm-top" src="/static/img/top@2x.png" alt=""></font><span>时尚圈</span></div>
    <div @click="_goToRouter(2)" :class="classC" class="sh-footer-bgcomm sh-footer-bgcomm-shop"><span>购物车</span></div>
    <div @click="_goToRouter(3)" :class="classD" class="sh-footer-bgcomm sh-footer-bgcomm-user"><span>我的</span></div>
  </div>
</div>
</template>

<script>
const CLASSNAME_LIST = ['sh-footer-bgcomm-choose-index', 'sh-footer-bgcomm-choose-design', 'sh-footer-bgcomm-choose-shop', 'sh-footer-bgcomm-choose-user'];
const FALSE = false;
  export default {
    data(){
      return {
        classA: CLASSNAME_LIST[0],
        classB: FALSE,
        classC: FALSE,
        classD: FALSE
      };
    },
    computed: {
      removeRouterList() {
        return this.$store.state.removeFooterMenuData;
      }
    },
    methods: {
      // goToRouter方法-->
      _goToRouter(num){
        let overClass = CLASSNAME_LIST[num];
        [this.classA, this.classB, this.classC, this.classD] = [FALSE, FALSE, FALSE, FALSE];
        if(num === 0){
          this.$router.replace({name: 'index'});
          this.classA = overClass;
        }
        if(num === 1){
          this.$router.replace({name: 'design'});
          this.classB = overClass;
        }
        if(num === 4){
          this.$router.replace({name: 'business'});
        }
        if(num === 2){
          this.$router.replace({name: 'onelist'});
          this.classC = overClass;
        }
        if(num === 3){
          this.$router.replace({name: 'user'});
          this.classD = overClass;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// @import '/static/css/common.css'
// @import '/static/css/index.css'
</style>
