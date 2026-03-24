import axiosInstance from "./axiosInstance";

interface LoginData {
  email: string;
  password: string;
}

export const loginAPI = async (data: LoginData) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data; // should contain token
};

export const registerAPI = async (data: LoginData) => {
  const response = await axiosInstance.post("/auth/registration", data);
  return response.data; // should contain token
};
