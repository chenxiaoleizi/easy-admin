import axios from "axios";
import { useUserStore } from "../store/user";
import { message } from "ant-design-vue";

// 取消请求的管理器
const abortControllerMap = new Map<string, AbortController>();
function addAbortController(url: string, abortController: AbortController) {
  abortControllerMap.set(url, abortController);
}
export function cancelRequest(url?: string) {
  if (url) {
    const target = abortControllerMap.get(url);
    if (!target) return;
    target.abort();
  } else {
    for (const [, controller] of abortControllerMap) {
      controller.abort();
    }
    abortControllerMap.clear();
  }
}

// 创建实例
const instance = axios.create();

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    if (config.url) {
      const controller = new AbortController();
      const signal = controller.signal;
      addAbortController(config.url, controller);
      config.signal = signal;
    }

    const userStore = useUserStore();
    const { token } = userStore;
    if (token) {
      config.headers.token = token;
    }
    // TODO 其它自定义配置

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    const data = response.data;

    if (data.code !== 0) {
      message.error(data.message || "请求出错！");
      return Promise.reject(data.message);
    }

    return data.data;
  },
  function (error) {
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
