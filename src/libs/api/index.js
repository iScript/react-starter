import { axios } from "@/libs/axios";

import "@/mock/mockData.js";

export const getUser = () => {
  return axios.get("/user");
};

export const login = (data) => {
  return axios.post("/login", data);
};
