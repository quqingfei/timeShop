<template>
  <div>
    <div class="sh-title">
      <span @click="goIndex"><i class="sh-back"></i></span>
          商品详情
      </div>
      <div class="banner">
          <div class="swiper-container" id="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="/static/img/图层-31@2x.png" alt=""></div>
                  <div class="swiper-slide"><img src="/static/img/图层-8@2x.png" alt=""></div>
                  <div class="swiper-slide"><img src="/static/img/图层-6@2x.png" alt=""></div>
              </div>
          </div>
      </div>
      <div class="sh-choose-title">
          裕大华1919--2017年中国时装周走秀款第一款火热的火烈鸟束腰连衣裙
      </div>
      <div class="sh-choose-money">
          <span><i>￥</i>1200</span>&nbsp;&nbsp;<font>￥3600</font>
      </div>
      <div class="sh-shoper border-1px"><div class="sh-shoper-name">快递：0.00</div> <div class="sh-shop-status">库存：1999</div></div>
      <div class="sh-10line"></div>
      <div class="sh-btn-shop-lan">
        <div @click="showDetial" class="rule">规格<img :class="classRotate" src="/static/img/down@2x.png" alt=""></div>
        <div class="bgyellow">加入购物车</div>
        <div class="yellow">立即购买</div>
      </div>
      <div class="sh-detial-det">
        <div class="left">
          <span class="active">图文详情</span>
        </div>
        <div class="right" @click="goBody">
          <span>商品参数</span>
        </div>
      </div>
      <div class="sh-detial-picture">
        <img src="/static/img/18@2x.png" alt="">
      </div>
      <div :class="showChoose" class="sh-detial-choose">
        <div class="sh-detial-top">
            <div class="picture">
              <img src="/static/img/图层-36@2x.png" alt="">
            </div>
            <div class="sh-detial-money">
              <div class="sh-det-money">
                <font><span>￥</span>1200</font>
                <em>￥3600</em>
              </div>
              <div class="sh-detial-ku">
                库存：3200
              </div>
            </div>
            <i @click="showDetial" class="detial-close"></i>
        </div>
        <div class="choose-goods">
          <div class="sh-color-choose">
          <font class="text">颜色</font>
          <div class="colors-list">
            <ul>
                <li style="background-color:#ffc6c9"></li>
                <li style="background-color:#c6e5ff"></li>
                <li style="background-color:#e2e4e5"></li>
                <li class="choosed" style="background-color:#ffffff"></li>
            </ul>
          </div>
        </div>
        <div class="sh-color-choose sh-det-topmar">
          <font class="text">尺码</font>
          <div class="colors-list">
            <ul>
                <li class="rule-choosed">XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
                <li>XXXL</li>
            </ul>
          </div>
        </div>
        <div class="sh-detial-num">
          <font>数量</font>
            <div class="sh-detial-total">
            <i>-</i>
            <font>1</font>
            <i>+</i>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isHsow" @click="showDetial" :class="shwoMask" class="marks-detial">

      </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  data(){
    return {
      isHsow: false,
      classRotate: '',
      showChoose: '',
      shwoMask: ''
    };
  },
  mounted(){
    let mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000,
      loop: true
    });
  },
  methods: {
    goIndex(){
      this.$router.replace({name: 'index'});
    },
    goBody(){
      this.$router.replace({name: 'body'});
    },
    showDetial(){
      if(this.isHsow){
        this.isHsow = false;
        this.classRotate = '';
        this.showChoose = '';
        this.shwoMask = '';
      }else{
        this.isHsow = true;
        this.classRotate = 'up';
        this.showChoose = 'show-sh-detial-choose';
        this.shwoMask = 'show-marks-detial';
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/base.styl'
@import '/static/css/common.css'
@import '/static/css/index.css'
@import '/static/css/goodslist.css'
@import '/static/css/goodsdetial.css'
.sh-choose-money
  span
    font-dpr(44)
    color #fa0f0f
    i
      font-dpr(30)
      font-style normal
  font
    font-dpr(30)
    color #999999
    text-decoration line-through
.sh-shoper
  color #595858
  heightandline-dpr(80)
.sh-btn-shop-lan
  position fixed
  bottom 0
  left 0
  width 100%
  display flex
  z-index 3
  div
    flex 1
    heightandline-dpr(90)
    text-align center
    font-dpr(30)
    color #666
    &.rule
      bordertop-dpr(2, #f0f0f0)
      box-sizing border-box
      background-color white
      img
        transition all 0.2s ease
        &.up
          -webkit-transform rotate(180deg)
    &.yellow
      color #fde203
      background-color #2a2a2a
    &.bgyellow
      background-color #fde203
    img
      display inline-block
      vertical-align middle
      width-dpr(24)
      margin-dpr(0, 0, 2, 20)
.sh-detial-det
  heightandline-dpr(86)
  width 100%
  color #666
  font-dpr(24)
  .left
    float left
    width 50%
    span
      display inline-block
      float right
      box-sizing border-box
      margin-dpr(0, 52, 0, 0)
  .right
    float right
    width 50%
    span
      display inline-block
      float left
      box-sizing border-box
      margin-dpr(0, 0, 0, 52)
  &.active
    borderbottom-dpr(6, #fde203)
.sh-detial-picture
  clear both
  width 100%
  margin-dpr(20,0,0,0)
  img
    width 100%
.sh-detial-choose
  height-dpr(720)
  background-color white
  position fixed
  bottom-dpr(-720)
  width 92%
  padding 0 4%
  z-index 2
  opacity 0
  transition all 0.4s ease-out
  .sh-detial-top
    position relative
    height-dpr(132)
    .picture
      width-dpr(200)
      height-dpr(200)
      margin-dpr(-88,0,0,40)
      float left
      img
        width 100%
        height 100%
        display block
        float float
    .sh-detial-money
      float left
      margin-dpr(30,0,0,24)
      .sh-det-money
        font
          color #fa0f0f
          font-dpr(44)
          span
            font-dpr(30)
        em
          color #999999
          font-dpr(26)
          margin-dpr(0,0,0,22)
          text-decoration line-through
    .sh-detial-ku
      color #595858
      margin-dpr(14,0,0,0)
      font-dpr(24)
    .detial-close
      width-dpr(34)
      height-dpr(34)
      position absolute
      top-dpr(11)
      right-dpr(-14)
      background url('/static/img/X@2x.png') no-repeat center center
      background-size 100% 100%
  .choose-goods
    minheight-dpr(395)
    overflow-y auto
    .sh-color-choose
      overflow hidden
      padding-dpr(24,0,32,40)
      border-bottom 1px solid #eee
      .text
        font-dpr(24)
        color #999
      .colors-list
        margin-dpr(16,0,0,0)
        overflow visible
        ul
          li
            float left
            width-dpr(100)
            boxshadow-dpr(0, 0, 0, 2, #dadada)
            height-dpr(40)
            box-sizing border-box
            position: relative
            text-align center
            lineheight-dpr(40)
            margin-dpr(0,0,8,0)
            color #999
            &.choosed
              boxshadow-dpr(0, 0, 0, 2, #fde203)
              &::before
                content ' '
                background-image url('/static/img/allright.png')
                position absolute
                top: 0
                left 0
                right 0
                bottom 0
                background-size 45%
                background-repeat no-repeat
                background-position center center
            &.rule-choosed
              boxshadow-dpr(0, 0, 0, 2, #fde203)
              color #fde203
    .sh-detial-num
      padding-dpr(24,0,32,40)
      font
        font-dpr(24)
        color #999
      .sh-detial-total
        margin-dpr(25,0,0,0)
        width-dpr(220)
        overflow hidden
        lineheight-dpr(42)
        border-dpr(2,#dadada)
        i
          display block
          float left
          width-dpr(40)
          font-dpr(42)
          color #999
          text-align center
          &:first-child
            borderright-dpr(2px,#dadada)
          &:last-child
            borderleft-dpr(2px,#dadada)
            float right
        font
          display block
          float left
          text-align center
          width-dpr(136)
.show-sh-detial-choose
  bottom-dpr(0)
  opacity 1
.marks-detial
  position fixed
  bottom 0
  width 100%
  height 100%
  background-color rgba(0,0,0,0.0)
  z-index 1
  transition all 0.4s ease
 .show-marks-detial
   background-color rgba(0,0,0,0.6)
</style>
