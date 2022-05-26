import { api } from "../api";

export const getBusiness = async(businessid) => {
    return api.get('/businesses/'+{businessid})
    .then(function (response) {
        return response;
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}