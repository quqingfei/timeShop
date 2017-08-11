// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import vuescroll from 'vue-scroll';
import App from './App';
import {api} from './api.js';
import index from '@/components/index/index';
// import detial from 'components/detial/detial';
const detial = r => require.ensure([], () => r(require('@/components/detial/detial.vue')), 'chunkname2');
// import onelist from 'components/onelist/onelist';
const onelist = r => require.ensure([], () => r(require('@/components/onelist/onelist.vue')), 'chunkname3');
// import user from 'components/user/user';
const user = r => require.ensure([], () => r(require('@/components/user/user.vue')), 'chunkname4');
import news from 'components/Ui_component/news/news';
import design from 'components/design/design';
import login from 'components/login/login';
import sign from 'components/sign/sign';
import business from 'components/business/business';
const body = r => require.ensure([], () => r(require('@/components/body/body.vue')), 'chunkname7');
import test from 'components/test/test';
// UI组件说明书
const doc = r => require.ensure([], () => r(require('ui_doc/doc.vue')), 'chunkname8');

Vue.config.productionTip = false;
Vue.prototype.interface = api;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vuescroll);

let app = Vue.extend(App);

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  { path: '/index',
    name: 'index',
    component: index,
    children: [{
        path: 'detial',
        name: 'detial',
        component: detial
     }]
  },
  { path: '/onelist', name: 'onelist', component: onelist },
  { path: '/user', name: 'user', component: user },
  { path: '/news', name: 'news', component: news },
  { path: '/design', name: 'design', component: design },
  { path: '/login', name: 'login', component: login },
  { path: '/sign', name: 'sign', component: sign },
  { path: '/business', name: 'business', component: business },
  { path: '/test', name: 'test', component: test },
  { path: '/body', name: 'body', component: body },
  { path: '/doc', name: 'doc', component: doc }
];

const store = new Vuex.Store({
  state: {
    scrollList: {index: 0, design: 0, fashion: 0, shop: 0, user: 0},
    removeFooterMenuData: {
      type: String
    }
  },
  mutations: {
    /* 底部菜单栏滚动位置记录--start */
    saveScrollList_index(state, data){ // 首页--滚动条位置记录
      state.scrollList.index = data;
    },
    saveScrollList_design(state, data){ // 设计师--滚动条位置记录
      state.scrollList.design = data;
    },
    saveScrollList_fashion(state, data){ // 时尚圈--滚动条位置记录
      state.scrollList.fashion = data;
    },
    saveScrollList_shop(state, data){ // 购物车--滚动条位置记录
      state.scrollList.shop = data;
    },
    saveScrollList_user(state, data){ // 我的--滚动条位置记录
      state.scrollList.user = data;
    },
    /* 底部菜单栏滚动位置记录--end */
    /* sdfasdf */
    removeFooterMenu(state, data){
      state.removeFooterMenuData = data;
    }
  }
});

const router = new VueRouter({
  routes,
  linkActiveClass: 'router-active'
});
/* add yyyy-MM-dd hh:mm:ss filter */
Vue.filter('times', function(time) {
  if(typeof (time) === 'undefined'){
    return ``;
  };
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
});

Vue.filter('timesMMdd', function(time) {
  if(typeof (time) === 'undefined'){
    return ``;
  };
  let date = new Date(time);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  return `${month}/${day}`;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
});

/* Disable dropped file from opening in window
https://github.com/electron/electron/issues/908
document.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
});
document.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
});
Disable context menu */
/* document.addEventListener('contextmenu', event => {
  event.preventDefault();
  event.stopPropagation();
}); */
/* Disable double click selection */
/* document.addEventListener('mousedown', e => {
  e.preventDefault();
}); */
