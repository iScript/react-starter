import { axios } from "@/libs/axios";

export const getUser = () => {
  return axios.get("/api/guarantee/expose?order_no=111");
};

export const login = () => {
  return axios.post("/api/login");
};
