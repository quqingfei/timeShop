<template>
    <span>
      <div class="sh-mark">
        <ul>
            <li v-for="item in listImgUrl" :style="{background: 'url('+item.url+') no-repeat center center', backgroundSize: '90%'}"></li>
        </ul>
      </div>
    </span>
</template>
<script>
  export default {
    props: {
      listImgUrl: {
        type: Array
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
