import axios from "axios";
import { useUserStore } from "../store/user";
import { message } from "ant-design-vue";

// 创建实例
const instance = axios.create();

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const { token } = userStore;

    if (token) {
      config.headers.token = token;
      // TODO 其它自定义头部
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
  get<T = any>(url: string, params?: Object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T = any>(url: string, params?: Object): Promise<T> {
    return instance.post(url, params);
  },
};

export default http;
