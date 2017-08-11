<template>
<span>
    <div class="sh-radio" v-for="(value,key) in radioList" :class="{shradiodisable: value.disable}" @click="manType(key,value,radioList)">
        <div class="sh-input-radio" :class="{radioactive: key==sexType || value.selected}" ></div>
        <div class="sh-input-radio-lable" v-html="value.name"></div>
    </div>
</span>

</template>

<script>
  export default {
    props: {
        radioList: {
            type: Array
        }
    },
    data() {
      return {
        sexType: null,
        itemValue: null
      };
    },
    mounted() {
        for(let item of this.radioList){
            if(item.selected){
                this.itemValue = item.name;
                break;
            }
        }
    },
    methods: {
        manType(key, value, radioList) {
            if(value.disable){
                return;
            }else{
                this.sexType = key;
                for(let item of radioList){
                    if(item.selected){
                        item.selected = false;
                        break;
                    }
                }
                this.itemValue = value;
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
    border-radius 50%
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
