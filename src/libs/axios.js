import Axios, { AxiosRequestConfig } from "axios";
import storage from "@/libs/storage";
import { API_URL } from "@/configs";

export const axios = Axios.create({
  baseURL: API_URL,
});

// request拦截器
axios.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
});

// response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(error);
    // 通知错误
    //return Promise.reject(error);
  }
);
