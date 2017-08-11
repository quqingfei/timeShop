<template>
<span>
    <div class="sh-title">
        <span v-show="back"><i class="sh-back"></i></span>
        {{title}}
    </div>
</span>
</template>

<script>
export default {
    props: {
        title: '',
        back: false
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
