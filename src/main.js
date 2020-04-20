import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入插件
import echarts from "echarts";
import "echarts/map/js/china";
import jquery from "jquery";
import axios from "./httpConfig/http";
import VueAxios from "vue-axios";
// 引入css
import "./assets/css/base.css";
import "./assets/iconfont/iconfont.css";
import BgSvg from "./components/BgSvg";
import ScrollNews from "./components/ScrollNews";

// 安装插件
Vue.prototype.$echarts = echarts;
Vue.prototype.$ = jquery;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;
// 安装组件
Vue.component("BgSvg", BgSvg);
Vue.component("ScrollNews", ScrollNews);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
