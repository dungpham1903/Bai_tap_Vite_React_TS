import axiosClient from "./axiosClient";

export const fetchCities = async (params?: string) => {
    const response = await axiosClient.get('/Address/getCities', { params });
    return response.data;
};
export const fetchDistricts = async (cityCode: string) => {
    const response = await axiosClient.get(`/Address/getDistricts/${cityCode}`);
    return response.data;
};