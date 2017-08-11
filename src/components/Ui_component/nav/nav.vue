<template>
  <span>
    <div class="sh-section border-1px">
      <div class="shoplist">{{nav_title.left_title}}</div>
      <div class="alllist rightbg">{{nav_title.right_title}}</div>
    </div>
  </span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      nav_title: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
