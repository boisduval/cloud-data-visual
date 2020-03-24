import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入插件
import echarts from "echarts";
import "echarts/map/js/china";
import jquery from "jquery";
// 引入css
import "./assets/css/base.css";
import "./assets/iconfont/iconfont.css";

// 安装插件
Vue.prototype.$echarts = echarts;
Vue.prototype.$ = jquery;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
