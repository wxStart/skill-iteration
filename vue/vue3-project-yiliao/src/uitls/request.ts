import axios from "axios";
// 1. 利用axios请求 和 拦截器功能
// 2. 请求拦截器 设置一些公共头部参数等
// 3. 响应拦截器，统一处理服务器的数据，处理http网络错误

import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  console.log("config: ", config);
  config.headers.Authorization = "123";
  return config;
});

const handleResponse = function (resData: any) {
  const { code, data, error } = resData;
  if (code >= 0) {
    return { ok: true, data, code, message: error, error };
  } else {
    return { ok: false, data, code, message: error, error };
  }
};

export type ResponseResult = {
  ok: boolean;
  code?: number;
  status?: number;
  data?: any;
  error?: string;
  message?: string;
};

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 成功的回调
    return handleResponse(res.data) as any;
  },
  (error) => {
    console.log("error: ", error);
    if (!error.response) {
      // 网络请求超时的
      return ElMessage({
        message: error.message,
        grouping: true,
        type: "error",
      });
      return {
        ok: false,
        message: error.message,
        status: -1,
        error: "网络请求超时",
      };
    }

    const status = error.response.status;
    if (status == 404) {
      ElMessage({
        message: "服务请求路径异常",
        grouping: true,
        type: "error",
      });
      return { ok: false, message: error.message, status };
    } else if (status >= 500) {
      ElMessage({
        message: "服务异常",
        grouping: true,
        type: "error",
      });
      return { ok: false, message: error.message, status };
    }
    // 处理网络请求http错误
    return Promise.reject(new Error(error.message));
  }
);

export default request;
