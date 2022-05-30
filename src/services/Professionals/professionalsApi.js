import { api } from "../api"

export const getProfessionalsByBusiness = (businessId) => {
    return api.get("/professionals", { businessId: businessId })
        .then((response) => {
            return response.data && response.data.success ?
                response.data.data : response.data
        })
        .catch((error) => console.log("Erro:", error))
}