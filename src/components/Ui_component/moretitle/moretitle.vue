<template>
  <span>
   <div class="sh-small-title">
    <div class="sh-small-title-font" v-text="title"></div>
    <div class="sh-more" @click="openMore" v-if="showMore">更多</div>
  </div>
</span>
</template>
<script>
  export default {
    props: {
      title: '',
      showMore: false,
      router: {
        type: Object
      }
    },
    methods: {
      openMore() {
        if(typeof (this.router) !== 'undefined'){
          this.$router.replace({ name: this.router.goRouter, query: this.router.query });
          this.$store.commit('removeFooterMenu', this.router.whenRouterHide);
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
