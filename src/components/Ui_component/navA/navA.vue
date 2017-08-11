<template>
  <span>
    <div class="sh-main">
      <ul>
        <li v-for="item in items">
          <a :href="item.links">{{ item.texts }}</a>
        </li>
      </ul>
    </div>
  </span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      items: {
        type: Array
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
