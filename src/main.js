// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import './assets/icon/iconfont.css'
import { getRequest } from './utils/request'
import { postRequest } from './utils/request'
import { deleteRequest } from './utils/request'
import { putRequest } from './utils/request'

import {
  LoadingPlugin,
  Flexbox,
  FlexboxItem,
  Group,
  Divider,
  Grid,
  GridItem,
  Drawer,
  ViewBox,
  XHeader,
  Tabbar,
  TabbarItem,
  XInput,
  XButton,
  Cell,
  Marquee,
  MarqueeItem,
  Box,
  Rater
} from 'vux'
Vue.use(LoadingPlugin);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.component('group', Group);
Vue.component('divider', Divider);
Vue.component('grid', Grid);
Vue.component('grid-item', GridItem);
Vue.component('drawer', Drawer);
Vue.component('view-box', ViewBox);
Vue.component('x-header', XHeader);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('x-input', XInput);
Vue.component('x-button', XButton);
Vue.component('cell', Cell);
Vue.component('marquee', Marquee);
Vue.component('marquee-item', MarqueeItem);
Vue.component('box', Box);
Vue.component('rater', Rater);

FastClick.attach(document.body);
Vue.config.productionTip = false;

Vue.config.productionTip = false;
Vue.prototype.getRequest = getRequest;  //get请求
Vue.prototype.postRequest = postRequest;  //post请求
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;

/* eslint-disable no-new */
new Vue({
  router,
  created: function () {
    // 基准大小
    const baseSize = 32
// 设置 rem 函数
    function setRem () {
      // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
      const scale = document.documentElement.clientWidth / 750
      // 设置页面根节点字体大小
      document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
    }
// 初始化
    setRem()
// 改变窗口大小时重新设置 rem
    window.onresize = function () {
      setRem()
    }
  },
render: h => h(App)
}).$mount('#app-box')
