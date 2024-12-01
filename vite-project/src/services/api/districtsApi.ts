import { AddressParams } from "../../types/AddressTypes";
import axiosClient from "./axiosClient"
const districtsApi = {
    get(code: string) {
        const url = `/Address/getDistricts/${code}`;
        return axiosClient.get<AddressParams[]>(url);
    }
}
export default districtsApi;