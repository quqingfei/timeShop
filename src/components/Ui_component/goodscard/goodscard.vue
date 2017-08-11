<template>
<span>
 <div class="sh-shoper-detial">
    <div class="shoerdetial">
        <div class="shop-img">
            <img src="/static/img/图层-31@2x.png" alt="">
        </div>
        <div class="shoptext">
            <div class="shoper-tt" v-text="goodsName"></div>
            <div class="shop-rule">
                <div class="shop-rule-s">
                    颜色：{{goodsColor}} &nbsp;&nbsp; 尺码：{{goodsRule}}
                </div>
                <div class="shop-rule-n">
                    x {{number}}
                </div>
            </div>
            <div class="money">
                ￥ {{price.toFixed(2)}}
            </div>
            <div class="shop-move-money">
                运费：{{freight.toFixed(2)}}
            </div>
        </div>
    </div>
</div>
</span>
</template>

<script>
  export default {
    props: {
      goodsName: null,
      goodsColor: null,
      goodsRule: null,
      number: {
        type: Number,
        default: 1
      },
      price: {
        type: Number,
        default: 0
      },
      freight: {
        type: Number,
        default: 0
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
