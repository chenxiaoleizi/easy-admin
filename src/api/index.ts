import axios from "axios";
import { useUserStore } from "../store/user";

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
    return response;
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
