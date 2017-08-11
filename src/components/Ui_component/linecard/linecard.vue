<template>
  <span>
    <div class="sh-shoper border-1px">
      <div class="sh-shoper-name" v-html="leftName"></div>
      <div class="sh-shop-status" v-html="rightName"></div>
    </div>
  </span>
</template>

<script>
export default {
    props: {
      leftName: null,
      rightName: null
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
