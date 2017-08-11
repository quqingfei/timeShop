<template>
    <div class="sh-input">
      <div class="sh-input-title"><span v-html="lable"></span>：</div>
      <div class="sh-input-val"><input type="text" :placeholder="description" name="" value=""></div>
    </div>
</template>

<script>
  export default {
    props: {
        lable: {
            type: String
        },
        description: {
            type: String
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
</style>
