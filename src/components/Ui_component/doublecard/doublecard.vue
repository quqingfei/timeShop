<template>
<span>
 <div class="sh-double">
    <ul>
      <li class="border-1px" v-for="item in dataList">
        <a :href="item.link">
          <div class="sh-double-imgs">
            <img src="/static/img/23@2x.png" alt="">
          </div>
          <div class="sh-double-title">
            <p v-text="item.name"></p>
          </div>
          <div class="sh-double-font">
            <span><i>￥</i>{{item.price.toFixed(2)}}</span>
            <font>￥{{item.oldPrice.toFixed(2)}}</font>
          </div>
        </a>
      </li>
    </ul>
</div>
</span>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/base.styl'
.sh-double
  width 92%
  margin 0 auto
  margin-bottom 1.833333rem
  ul
    overflow hidden
    li
      float left
      width 50%
      box-sizing border-box
      border 1px solid #ccc
      &:nth-child(2n)
        border-left none
      a
        display block
        width 100%
        height 100%
        .sh-double-imgs
          width 100%
          box-sizing border-box
          img
            width 100%
            height-dpr(400)
        .sh-double-title
          font-dpr(30)
          lineheight-dpr(42)
          margin-dpr(10,0,10,0)
          p
            margin-left 2%
            text-decoration none
            color #333333
        .sh-double-font
          lineheight-dpr(40)
          span
            display block
            float left
            width 48%
            margin-left 2%
            font-dpr(36)
            color #fd0303
            i
              font-style normal
              font-dpr(30)
          font
            display block
            float right
            width 42%
            text-decoration line-through
            text-align right
            margin-right 8%
            color #999
</style>
