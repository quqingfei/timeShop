<template>
    <div class="sh-select" :style="{width: width}">
      <div class="sh-select-title border-1px" @click="openSelect($event)" data-value="">
        <span class="sh-select-font" v-text="chooseName">---请选择---</span>
        <div class="sh-select-item" @click="stopPropagation" style="display: none">
            <ul>
                <li @click="itemSelect({value: '',name: '--请选择--'})">--请选择--</li>
                <li v-for="item in datas" v-text="item.name" @click="itemSelect(item)"></li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      datas: {
        type: Array
      },
      width: {
        default: '100%'
      },
      height: {
        type: Number
      }
    },
    data() {
      return {
        chooseValue: '',
        chooseName: '--请选择--',
        currentSelect: null
      };
    },
    methods: {
      openSelect(event) {
        let currentSelectFather = event.currentTarget.getElementsByClassName('sh-select-item')[0];
        this.currentSelect = currentSelectFather;
        if(currentSelectFather.style.display === 'block'){
          currentSelectFather.style.display = 'none';
        }else{
          let itmesd = [...document.getElementsByClassName('sh-select-item')];
          for (let itme of itmesd){
            itme.style.display = 'none';
          }
          currentSelectFather.style.display = 'block';
        }
      },
      stopPropagation(e) {
        e.stopPropagation();
      },
      itemSelect(item) {
        this.chooseValue = item.value;
        this.chooseName = item.name;
        this.currentSelect.style.display = 'none';
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/base.styl'
.sh-select
  position absolute
  width 100%
  .sh-select-title
    position: relative;
    border 1px solid #ccc
    box-sizing: border-box
    heightandline-dpr(68)
    .sh-select-font
      display inline-block
      white-space nowrap
      text-overflow ellipsis
      margin-left 4%
      overflow: hidden
      width 90%
      background-image url('/static/img/down@2x.png')
      background-repeat no-repeat
      background-position right center
      background-size 0.32rem
    .sh-select-item
      position: absolute;
      left: 0;
      top-dpr(66)
      background: #f7f7f7;
      width: 100%
      display none
      z-index: 101
      box-shadow: 0 5px 20px #aaa;
      ul
        padding 0 0 0 4%
        margin 0
        list-style none
        li
          padding 0
          margin 0
          list-style none
          box-sizing border-box
          overflow: hidden
          white-space nowrap
          text-overflow ellipsis
          border-bottom 1px solid #fff
</style>
