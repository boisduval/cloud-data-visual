/**
 * ajax请求配置
 */
import axios from "axios";

// axios默认配置
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.baseURL = "http://sf28090049.wicp.vip:8083/conn"; // 默认地址
// axios.defaults.baseURL = 'http://192.168.0.100:8082/conn'
// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    window.alert(error.response.status);
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

export default axios;
