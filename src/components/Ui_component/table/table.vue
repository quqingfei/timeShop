<template>
  <div class="table">
    <div class="test-div">
      <table class="nav-table table-striped swiper-slide-shadow-right">
        <thead>
        <tr>
          <th>测量项目</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>领围</td>
        </tr>
        <tr>
          <td>胸围</td>
        </tr>
        <tr>
          <td>中腰围</td>
        </tr>
        <tr>
          <td>总肩宽</td>
        </tr>
        <tr>
          <td>袖长</td>
        </tr>
        <tr>
          <td>后衣长</td>
        </tr>
        <tr>
          <td>上臂围</td>
        </tr>
        <tr>
          <td>臂围</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="cont-table-div">
      <table class="content-table table-striped">
        <thead>
        <tr>
          <th>净体尺寸（CM）</th>
          <th>加放量（CM）</th>
          <th>成衣尺寸（CM）</th>
          <th>text1（CM）</th>
          <th>text2（CM）</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>50.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>100.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {};
</script>

<style type="text/css">
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f7f7f7;
  }
</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/base.styl';
  .table
    width: 100%;
    text-align: center;
    overflow: hidden;
    font-dpr(28);
    margin-dpr(40,0,0,0);
    lineheight-dpr(60);
    .test-div
      boxshadow-dpr(2, 0, 20, 5, #ddd);
      width: 25%;
      float: left;
      position: relative;
      z-index: 1;
      borderbottom-dpr(2,#ddd)
      .nav-table
        width: 100%;
        tr
          &:last-child
          td
            // borderbottom-dpr(2,#ddd);
        th
          text-align: center;
          bordertop-dpr(2,#ddd);
        td
          padding-left: 0;
          // bordertop-dpr(2,#ddd);
    .cont-table-div
      width: 75%;
      float: left;
      overflow-x: auto;
      borderbottom-dpr(2,#ddd)
      bordertop-dpr(2,#ddd);
      .content-table
        width: auto;
        tr
          &:last-child
          td
            // borderbottom-dpr(2,#ddd);
        th
          width: 200px;
          padding: 0 10px;
          white-space: nowrap;
        td
          width: 200px;
          padding: 0 10px;
          // bordertop-dpr(2,#ddd);
</style>
