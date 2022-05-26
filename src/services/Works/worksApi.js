import { api } from "../api";

export const getWorksByBusiness = async(businessid, page = 0, pageSize = 10) => {
    return api.get('/works/businessid='+{businessid}+'pageSize='+{pageSize})
    .then(function (response) {
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}