import { getUserFromCookies } from "@/utils/auth";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};

    // Add Authorization header
    let user = getUserFromCookies();

    if (user) {
      config.headers["Authorization"] = `Bearer ${user.accessToken}`;
    }

    // Check if the request is for multipart/form-data
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => {
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default axiosInstance;
