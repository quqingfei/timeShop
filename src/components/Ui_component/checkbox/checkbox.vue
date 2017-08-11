<template>
<span>
    <div class="sh-radio" v-for="(value,key) in checkedList" :class="{shradiodisable: value.disable}" @click="manType(key,value,checkedList)">
        <div class="sh-input-radio" :class="{radioactive: value.selected}" ></div>
        <div class="sh-input-radio-lable" v-html="value.name"></div>
    </div>
</span>

</template>

<script>
  export default {
    props: {
        checkedList: {
            type: Array
        }
    },
    data() {
      return {
        itemValue: null
      };
    },
    mounted() {
        for(let item of this.checkedList){
            if(!item.selected){
                this.$set(item, 'selected', false);
            }
        }
    },
    methods: {
        manType(key, value, checkedList) {
            if(value.disable){
                return;
            }else{
                if(value.selected){
                    value.selected = false;
                }else{
                    value.selected = true;
                }
            }
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/base.styl'
.sh-radio
  overflow hidden
  float left
  cursor pointer
  margin-dpr(0,0,0,16)
  .sh-input-radio
    float left
    width-dpr(32)
    height-dpr(32)
    box-sizing border-box
    border-radius 8%
    border-dpr(8,#ccc)
  .sh-input-radio-lable
    float left
    lineheight-dpr(34)
    margin-dpr(0,0,0,8)
  .radioactive
    border-dpr(8,#fde100)
.shradiodisable
    color #ccc
</style>
