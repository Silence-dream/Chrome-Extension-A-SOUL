import axios, { AxiosRequestConfig } from 'axios';

const config = {
  baseURL: import.meta.env.MODE === 'development' ? undefined : 'http://api.bilibili.com',
  timeout: 60 * 1000, // Timeout,
  withCredentials: true, // Check cross-site Access-Control
  header: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json;charset=utf-8',
  },
};
// 创建一个 axios 实例对象，用于配置项目应用相关请求
const _axios = axios.create(config);
export const _axiosBase = {
  a: _axios.defaults,
  b: import.meta.env,
};
// 请求拦截器
_axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
_axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);

export function httpGet(url: string, params?: any) {
  return _axios.get(url, {
    params,
  });
}

export function httpPost(url: string, params?: any, config?: AxiosRequestConfig<any>) {
  return _axios.post(url, params, config);
}
