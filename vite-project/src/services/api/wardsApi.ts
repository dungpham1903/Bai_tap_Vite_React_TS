import { AddressParams } from "../../types/AddressTypes";
import axiosClient from "./axiosClient"

const wardsApi = {
    get(code: string) {
        const url = `/Address/getWards/${code}`;
        return axiosClient.get<AddressParams[]>(url);
    }
}
export default wardsApi;