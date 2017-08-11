<template>
<span>
    <table>
        <caption class="tpi">裕大华wap端UI组件文档说明表</caption>
        <thead class="doc-head">
            <tr>
                <th>组件名称</th>
                <th>组件介绍</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>所有组件的使用方法：例如：（title组件）
      <br>
      <p>1.   先在组件的script 标签中引入UI组件title “import vTitle from '@/components/Ui_component/title/title'”</p>
      <p>2.   在script标签中
      <pre>export default {
        components: {
            vTitle
        },
      };
      </pre>
      </p>
      <p>3.  html中直接写
        < v-title > < /v-title > 就可以
      </p>
      <p>4. 整体表现 <br/>
        <img src="../ui_doc/tit.png" alt="">
        </p>
        <p>5.页面渲染结果 <br />
        <img src="../ui_doc/res.png" alt="">
       </p>
       </td>
        </tr>
            <tr>
              <td class="doc-half">title  <标题组件>
                <div>
                  <img src="../ui_doc/back.png" alt="">
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                title: string  (默认为空)<标题名称>，<br/>
                back: true | false  (默认false)<是否显示左边返回按钮>
              </td>
            </tr>
            <tr>
              <td class="doc-half">banner <轮播图组件>
                 <div>
                  <img src="../ui_doc/swiper.png" alt="">
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                imglist: Array  <图片对象地址>，例如：<br />
                  imglist: [
                    {url: 'http:a/b.png'},
                    {url: 'http:c/d.png'}
                  ]
                <br/>

              </td>
            </tr>
            <tr>
              <td class="doc-half">moretitle <标题-更多组件>
                 <div>
                  <img src="../ui_doc/morelist.png" alt="">
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  title: string  <左边标题文字><br/>
                  showMore: true | false (默认false)<是否显示右边更多><br/>
                  router: {<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;goRouter: string <需要打开路由的名称><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;appRouterHide: string <进入此路由隐藏底部APP组件><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;query: {key: value} <路由所带的参数>,例如：query:{id: 123}；页面链接：http://localhost:8080/#/index/detial?id=123<br/>
                  }
                <br/>

              </td>
            </tr>
            <tr>
              <td class="doc-half">news <聚合组件>
                 <div>
                  <img src="../ui_doc/news.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>

              </td>
            </tr>
            <tr>
              <td class="doc-half">pic <三联图组件>
                 <div>
                  <img src="../ui_doc/pic.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>

              </td>
            </tr>
             <tr>
              <td class="doc-half">fullimg <全图组件>
                 <div>
                  <img src="../ui_doc/fullimg.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>

              </td>
            </tr>
            <tr>
              <td class="doc-half">batch <换一批组件>
                 <div>
                  <img src="../ui_doc/batch.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>

              </td>
            </tr>
            <tr>
              <td class="doc-half">logolist <标志列表组件>
                 <div>
                  <img src="../ui_doc/logolist.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  logolist: Array  <br>
                  例子：logolist: [
                  {
                    url: 'xxxxx.png' <|  rul必要字段>
                  },
                  {
                    url: 'xxxxx.png'
                  },
                  {
                    url: 'xxxxx.png'
                  }
                  ]
              </td>
            </tr>
            <tr>
              <td class="doc-half">search <搜索组件>
                 <div>
                  <img src="../ui_doc/search.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  logoShow: true | false (默认false)<是否显示logo>  <br>
                  vtext：string <输入框提示字符>（默认为空）
              </td>
            </tr>
            <tr>
              <td class="doc-half">nav <二级导航组件>
                 <div>
                  <img src="../ui_doc/nav.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  nav_title: object <包含两个属性：left_title,right_title> <br>
                  left_title：string <左边上级栏目标题>（默认为:空） <br>
                  right_title：string <右侧栏目标题>（默认为:空） <br>
                  例子：nav_title: { left_title: 'title1',right_title: 'title2'}
              </td>
            </tr>
            <tr>
              <td class="doc-half">navA <带a标签跳转的导航组件>
                 <div>
                  <img src="../ui_doc/navA.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  items: array <数组对象，每个对象成员包含两个属性：links、texts> <br>
                  links：string <需要跳转的链接>（默认为:空） <br>
                  texts：string <跳转标题>（默认为:空） <br>
                  例子：items: [{ links: 'baidu.com',texts: '标题一'},{ links: 'taobao.com',texts: '标题二'}]
              </td>
            </tr>
            <tr>
              <td class="doc-half">orderstatus <订单状态组件>
                 <div>
                  <img src="../ui_doc/orderstatus.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  orderStatus: array <数组对象，每个对象成员包含三个属性：title、icon、status> <br>
                  title：string <订单状态名>（默认为:空） <br>
                  icon：string <订单状态图标路径>（默认为:空） <br>
                  status：string <订单状态信息条数>（默认为:空） <br>
                  例子：orderStatus: [{ title: '待付款',icon: '/static/img/待付款_1@2x.png',status:''},{ title: '待付款',icon: '/static/img/待付款_1@2x.png',status:'1'}]
              </td>
            </tr>
            <tr>
              <td class="doc-half">corssmune <横向滑动菜单组件>
                 <div>
                  <img src="../ui_doc/corssmune.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                   muneList:  Array <格式-如下:><br/> <pre>
                    [
                       {name: '全部商品', link: null},
                        {name: '原创设计', link: null}
                    ]
                   </pre>
                  bgColor: 'white' <菜单栏背景色>(默认为白色)<br/>
                  fontcolor: 'black' <菜单栏字体颜色>(默认为黑色)
              </td>
            </tr>
            <tr>
              <td class="doc-half">doublecard <两栏商品列表组件>
                 <div>
                  <img src="../ui_doc/doublecard.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                   dataList:  Array <格式-如下:><br/> <pre>
                    [
                        {name: '无袖修长米色时尚长款可多穿风衣', link: null, price: 1980.00, oldPrice: 5999.00},
                        {name: '无袖修长米色时尚长款可多穿风衣', link: null, price: 1980.00, oldPrice: 5999.00}
                    ]
                   </pre>
              </td>
            </tr>
            <tr>
              <td class="doc-half">linecard <单行两栏文字列表组件>
                 <div>
                  <img src="../ui_doc/linecard.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                   rightName:  htmlString <接收html字符串或字符串><br/>
                   leftName:  htmlString <接收html字符串或字符串><br/>
                   示例：<br>

                     <&nbsp;linecard
                     :rightName="'共一件商品（含运费￥10.00）'" <br>
                     :leftName="'合计:<span class=warring>￥ 1990.00</span>'"><&nbsp;/linecard>
              </td>
            </tr>
            <tr>
              <td class="doc-half">goodscard <订单列表详情组件>
                 <div>
                  <img src="../ui_doc/goodscard.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                   goodsName:  String <商品名称><br/>
                   goodsColor:  String <所选商品颜色：例如：’红色‘><br/>
                   goodsRule:  String <商品大小码><br/>
                   number:  Number <商品数量；即：’用户买了几件‘><br/>
                   price:  Number <商品价格><br/>
                   freight:  Number <邮费><br/>
                   示例：<br>
<&nbsp;goodscard :goodsName="'裕大华1919-中国时装周走秀款第一款火热的火烈鸟束腰连衣裙'" :goodsColor="'红色'" :goodsRule="'S'" :number="1" :price="1980" :freight="10" ></&nbsp;goodscard>
              </td>
            </tr>
            <tr>
              <td class="doc-half">input <输入框组件>
                 <div>
                  <img src="../ui_doc/input.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>:lable="'身&nbsp;高(cm)'" :description="'请输入身高'"
                   lable:  htmlString <输入框lable名称><br/>
                   description:  String <输入框说明><br/>
                   示例：<br>
                    <&nbsp;v-input :lable="'身&nbsp;高(cm)'" :description="'请输入身高'"><&nbsp;/v-input>
              </td>
            </tr>
            <tr>
              <td class="doc-half">sex <性别组件>
                 <div>
                  <img src="../ui_doc/sex.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>

              </td>
            </tr>
            <tr>
              <td class="doc-half">radio <单选组件>
                 <div>
                  <img src="../ui_doc/radio.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  radioList:  Array <br>
                  数据格式(例子)：<br>
                  <img src="../ui_doc/radiodata.png" alt=""><br>
                  { name: htmlString <选项名称><br>
                  selected: true | false  <是否默认选中><br>
                  disable: true | false   <禁用选择><br>
                  }
              </td>
            </tr>
             <tr>
              <td class="doc-half">checkbox <单选组件>
                 <div>
                  <img src="../ui_doc/checkbox.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  checkedList:  Array <br>
                  数据格式(例子)：<br>
                  <img src="../ui_doc/radiodata.png" alt=""><br>
                  { name: htmlString <选项名称><br>
                  selected: true | false  <是否默认选中><br>
                  disable: true | false   <禁用选择><br>
                  }
              </td>
            </tr>
            <tr>
              <td class="doc-half">table <表格组件>
                 <div>
                  <img src="../ui_doc/table.png" alt="" />
                </div>
              </td>
              <td class="doc-half">属性：<br/>
                  当前还未做数据处理，
                  右边数据可以左右滑动。
              </td>
            </tr>
        </tbody>
    </table>

</span>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('removeFooterMenu', '/doc');
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../src/common/stylus/base.styl'
table
  tr
    border-top 5px solid #eee
    line-height: 0.5rem
  .tpi
    text-align center
    font-dpr(40)
  .doc-half
    display block
    float left
    width calc(50% - 1.173333rem)
    margin-left 1em
</style>
