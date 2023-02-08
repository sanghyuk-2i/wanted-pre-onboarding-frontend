import axios from "axios";
import { getStorageData } from "../utils/storageData";

const selectionApi = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 3000,
});

selectionApi.interceptors.request.use(
  (config) => {
    const accessToken = getStorageData("access-token");
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default selectionApi;
