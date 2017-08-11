<template>
<div style="min-height:100vh;overflow-y:auto;background-color:#f0f0f0;">
    <v-search :vtext="'输入商品搜索'"></v-search>
      <v-crossmenu :muneList="munelist" :bgColor="'#2a2a2a'" :fontcolor="'white'"></v-crossmenu>
    <table class="adb sh-one border-soo">
        <tr>
            <td><span>女</span>装<br/><p>LADIES</p></td>
        </tr>
    </table>

    <table class="adb sh-two border-soo">
        <tr>
            <td><span>男</span>装<br/><p>MENS' WEAR</p></td>
        </tr>
    </table>

    <table class="adb sh-j border-tr border-tl border-trrr-half">
        <tr>
            <td><span>上</span>衣<br/><p>JACKET</p></td>
        </tr>
    </table>
    <table class="adb sh-t border-tr border-trr border-tlll-half">
        <tr>
            <td><span>下</span>装<br/><p>TROUSERS</p></td>
        </tr>
    </table>
    <table class="adb sh-s border-tr border-tl border-trrr-half">
        <tr>
            <td><span>裙</span>子<br/><p>SKIRT</p></td>
        </tr>
    </table>
    <table class="adb sh-a border-tr border-trr border-tlll-half">
        <tr>
            <td><span>配</span>饰<br/><p>ACCESSORIES</p></td>
        </tr>
    </table>
</div>
</template>
<script>
import vSearch from '@/components/Ui_component/search/search';
import vCrossmenu from '@/components/Ui_component/crossmenu/crossmenu';
  export default {
    components: {
        vSearch,
        vCrossmenu
    },
    data() {
        return {
            munelist: [
                {name: '全部商品', link: null},
                {name: '原创设计', link: null},
                {name: '1919定制', link: null},
                {name: '品牌服饰', link: null},
                {name: '设计师定制', link: null},
                {name: '其他', link: null}
            ]
        };
    },
    mounted(){
    },
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '/static/css/category.css'
@import '/static/css/common.css'
@import '/static/css/index.css'
@import '/static/css/goodslist.css'
</style>
