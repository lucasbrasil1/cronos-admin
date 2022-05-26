import { api } from "../api";

export const getBusiness = async(businessid) => {
    return api.get(`businesses/${businessid}`)
}