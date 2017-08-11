<template>
<span>
    <div class="sh-bus-search">
        <div class="sh-bus-logo" v-if="logoShow"><img src="/static/img/logo@2x (2).png" alt=""></div>
        <div class="sh-bus-search-input">
            <input type="" v-model="searchValue" name="" :placeholder="vtext">
        </div>
    <div class="sh-bus-search-btn" @click="search">搜索</div>
</div>
</span>
</template>

<script>
export default {
  props: {
    logoShow: false,
    vtext: ''
  },
  data() {
    return {
      searchValue: null
    };
  },
  methods: {
    search() {
      console.log(this.searchValue);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/base.styl'
.sh-bus-search
  display flex
  height-dpr(80)
  .sh-bus-logo
    flex-dpr(174)
    img
      width 100%
      height 100%
      text-align center
      vertical-align middle
  .sh-bus-search-input
    flex 1
    padding-left 0.266667rem
    background-color white
    input
      background-color #f1f1f1
      background-image url(/static/img/big@2x.png)
      background-repeat no-repeat
      background-size 0.4rem
      background-position 0.16rem center
      padding-left 0.72rem
      border-radius 4px
      heightandline-dpr(55)
      margin-dpr(12,0,0,0)
      width calc(100% - 0.72rem)
  .sh-bus-search-btn
    flex-dpr(124)
    heightandline-dpr(80)
    text-align center
    font-dpr(30)
    background-color white
</style>
