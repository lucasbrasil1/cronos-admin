import { api } from "../api"

export const getProfessionalsByBusiness = async (businessId) => {
    return api.get("/professionals", { businessId: businessId })
        .then((response) => {
            return response.data && response.data.success ?
                response.data.data : response.data
        })
        .catch((error) => console.log("Erro:", error))
}

export const createProfessional = async (professional) => {
    return api.post("/professionals", professional)
        .then((response) => {
            return response.data
        })
        .catch((error) => console.log("Erro:", error))
}