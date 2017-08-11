<template>
<span>
    <v-title :title="'体型详情'" :back="true"></v-title>
    <hr>
    <v-input :lable="'姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名'" :description="'请输入姓名'"></v-input>
    <v-sex></v-sex>
    <v-input :lable="'年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄'" :description="'请输入年龄'"></v-input>
    <v-input :lable="'身高(CM)'" :description="'请输入身高'"></v-input>
    <v-input :lable="'体重(KG)'" :description="'请输入体重'"></v-input>
    <v-table></v-table>
    <v-selecttab :title="'领型'">
        <v-select :datas="datas" :width="selectWidth"></v-select>
    </v-selecttab>
    <v-selecttab :title="'驳头宽度/高度'">
        <v-select :datas="datas" :width="selectWidth"></v-select>
    </v-selecttab>
    <v-selecttab :title="'驳眼'">
        <v-select :datas="datas" :width="selectWidth"></v-select>
    </v-selecttab>
    <v-selecttab :title="'驳眼线色'">
        <v-select :datas="datas" :width="selectWidth"></v-select>
    </v-selecttab>
    <v-selecttab :title="'门襟'">
        <v-select :datas="datas" :width="selectWidth"></v-select>
    </v-selecttab>
</span>
</template>

<script>
import vTitle from '@/components/Ui_component/title/title';
import vTable from '@/components/Ui_component/table/table';
import vInput from '@/components/Ui_component/input/input';
import vSex from '@/components/Ui_component/sex/sex';
import vSelecttab from '@/components/Ui_component/selecttab/selecttab';
import vSelect from '@/components/Ui_component/select/select';
  export default {
    components: {
        vTable,
        vTitle,
        vSex,
        vInput,
        vSelecttab,
        vSelect
    },
    mounted() {
      this.$store.commit('removeFooterMenu', '/body');
    },
    data() {
        return {
            datas: [
              {value: 'peach1', name: '桃子1阿士大夫撒地方萨芬的'},
              {value: 'peach2', name: '桃子2'},
              {value: 'peach3', name: '桃子3'}
            ],
            selectWidth: '46%'
        };
    },
    methods: {
        goDetial(){
          this.$router.replace({name: 'detial'});
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
