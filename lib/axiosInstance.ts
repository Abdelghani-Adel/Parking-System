import { getAuthToken } from "@/utils/auth";
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
    let token = getAuthToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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
