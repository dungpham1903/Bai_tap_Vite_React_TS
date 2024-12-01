import { AddressParams } from "../../types/AddressTypes";
import axiosClient from "./axiosClient"

export const citiesApi = {
    getAll(params?: string) {
        const url = "/Address/getCities";
        return axiosClient.get<AddressParams[]>(url, { params });
    },
}
// export default citiesApi;
// export const fetchCities = async (params?: string) => {
//     const response = await axiosClient.get('/Address/getCities', { params });
//     return response.data;
// };
// export const fetchDistricts = async (cityCode: string) => {
//     const response = await axiosClient.get(`/Address/getDistricts/${cityCode}`);
//     return response.data;
// };