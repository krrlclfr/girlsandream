
import axiosInstance from "../axiosInstance";

export const productAPI = async () => {
    const response = await axiosInstance.get("/product");
    return response.data;
}