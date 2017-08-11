<template>
<div class="sh-input">
  <div class="sh-input-title">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</div>
  <div class="sh-input-val sh-b-10">
    <div class="sh-radio" @click="manType">
       <div class="sh-input-radio" :class="{radioactive: sexType=='m'}"></div>
        <div class="sh-input-radio-lable">男</div>
    </div>
    <div class="sh-radio" @click="womanType">
       <div class="sh-input-radio" :class="{radioactive: sexType=='w'}"></div>
        <div class="sh-input-radio-lable">女</div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props: {
    },
    data() {
      return {
        sexType: 'm'
      };
    },
    methods: {
      manType() {
        this.sexType = 'm';
      },
      womanType() {
        this.sexType = 'w';
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/base.styl'
.sh-input
  width 92%
  margin 0 auto
  height-dpr(80)
  lineheight-dpr(120)
  font-dpr(30)
  display flex
  .sh-input-title
    flex-dpr(160)
    text-align right
  .sh-input-val
    flex 1
    input
      height-dpr(50)
      width 96%
      line-height 100%
      border-bottom 1px solid #ccc
      padding-left 0.2rem
  .sh-b-10
    padding-dpr(44,0,0,0)
.sh-radio
  overflow hidden
  float left
  cursor pointer
  margin-dpr(0,0,0,16)
  .sh-input-radio
    float left
    width-dpr(32)
    height-dpr(32)
    box-sizing border-box
    border-radius 50%
    border-dpr(8,#ccc)
  .sh-input-radio-lable
    float left
    lineheight-dpr(34)
    margin-dpr(0,0,0,8)
  .radioactive
    border-dpr(8,#fde100)
</style>
