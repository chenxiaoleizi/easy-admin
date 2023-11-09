import axios from "axios";
import { useUserStore } from "../store/user";
import { message } from "ant-design-vue";

// 创建实例
const instance = axios.create();

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (useUserStore().token) {
      config.headers.token = useUserStore().token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const data = response.data;

    if (data.code !== 0) {
      message.error(data.message || "请求出错！");
      return Promise.reject(data.message);
    }

    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const http = {
  get(url: string, params: Object) {
    return instance.get(url, { params });
  },
  post(url: string, params: Object) {
    return instance.post(url, params);
  }
};

export default http;
