<template>
  <span>
    <div class="sh-four">
    <div v-for="item in orderStatus">
      <a :href="item.link">
        <span style="position: relative;">
          <img :src="item.icon" alt=""/>
          <i class="marks-a" v-if="item.status">{{item.status}}</i>
        </span>
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
  </span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      orderStatus: {
        type: Array
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
