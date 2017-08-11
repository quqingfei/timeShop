<template>
  <span>
    <div class="sh-selecttab">
      <ul>
        <li>
          <div class="sh-selecttab-half" v-html="title"></div>
          <div class="sh-selecttab-half">
            <slot ></slot>
          </div>
        </li>
      </ul>
    </div>
  </span>
</template>

<script>

  export default {
    components: {
    },
    props: {
      title: {
        type: String,
        default: '-'
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/base.styl'
  .sh-selecttab
    width 92%
    margin 0.2rem auto 0 auto
    ul
      padding 0
      li
        padding 0
        overflow auto
        font-dpr(30)
        .sh-selecttab-half
          float left
          width 50%
          overflow: hidden;
          heightandline-dpr(68)
</style>
