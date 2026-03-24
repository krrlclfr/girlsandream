import axios from "axios";
import { getToken } from "../../utils/token";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add JWT token to every request if available
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
