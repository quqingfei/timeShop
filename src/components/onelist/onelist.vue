<template>
<div>
<v-title :title="'订单列表'" :back="true"></v-title>
<v-crossmenu :muneList="munelist"></v-crossmenu>
        <div class="sh-10line"></div>
        <div class="sh-goods-detial-list">
            <ul>
                <li>
                    <!-- <div class="sh-list-title">
                        订单号：<span>SH132131465465613213</span>
                    </div> -->
                    <v-linecard :leftName="'订单号：<span>SH132131465465613213</span>'"></v-linecard>

                    <v-linecard :leftName="'猫狗的店铺名字'" :rightName="'<span class=warning>待付款</span>'"></v-linecard>

                    <v-goodscard :goodsName="'裕大华1919-中国时装周走秀款第一款火热的火烈鸟束腰连衣裙'" :goodsColor="'红色'" :goodsRule="'S'" :number="1" :price="1980" :freight="10"></v-goodscard>

                    <v-linecard :leftName="'共一件商品（含运费￥10.00）'"  :rightName="'合计：<span class=warning>￥1990.00</span>'"></v-linecard>
                    <div class="shop-btn border-1px">
                        <div class="shop-btn-tbn par4">付款</div>
                        <div class="shop-btn-tbn">取消订单</div>
                    </div>
                </li>
            </ul>
        </div>
</div>
</template>

<script>
import Swiper from 'swiper';
import vTitle from '@/components/Ui_component/title/title';
import vCrossmenu from '@/components/Ui_component/crossmenu/crossmenu';
import vLinecard from '@/components/Ui_component/linecard/linecard';
import vGoodscard from '@/components/Ui_component/goodscard/goodscard';
export default {
    components: {
        vTitle,
        vCrossmenu,
        vLinecard,
        vGoodscard
    },
    data() {
        return {
            munelist: [
                {name: '全部', link: null},
                {name: '待付款', link: null},
                {name: '待发货', link: null},
                {name: '已完成', link: null},
                {name: '退换货', link: null},
                {name: '取消货', link: null},
                {name: '其他', link: null}
            ]
        };
    },
    mounted(){
    },
    beforeRouteLeave(to, from, next){
        let position = window.scrollY;
        this.$store.commit('saveScrollList_shop', position);
        next(vm => {
          this.$router.replace(to.path);
        });
    },
    activated(){
        let scrollY = this.$store.state.scrollList.shop;
        window.scroll(0, scrollY);
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '/static/css/common.css'
@import '/static/css/index.css'
@import '/static/css/goodslist.css'
</style>
