import { api } from "../api";

export const getWorksByBusiness = async(businessid, page = 0, pageSize = 10) => {
    return api.get('/works',{
        params: {
            businessid: businessid,
            page : page,
            pageSize : pageSize
        }
    });
}