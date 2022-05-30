import { api } from "../api";

export const getBusinessByBusinessOwner = async(businessOwnerid) => {
    return api.get(`businesses/${businessOwnerid}`)
    .then((response) => {
        return response.data && response.data.success? 
            response.data.data : response.data
    })
    .catch((error) => console.log("Erro:", error))
}

export const createBusiness = async(business) => {
    return api.post('businesses', {
        name: business.name,
        description: business.description,
        pathLogo : business.pathLogo,
        businessOwnerId : business.businessOwnerId
    })
}

export const updateBusiness = async(business) => {
    return api.put(`businesses/${business.businessId}`, {
        name: business.name,
        description: business.description,
        pathLogo : business.pathLogo,
        businessOwnerId : business.businessOwnerId
    });
}