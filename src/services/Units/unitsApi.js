import { api } from "../api"

export const getUnisByBusiness = (businessId, pageNumber, pageSize) => {
    api.get('units', {businessId, pageNumber, pageSize})
        .then((data) => {
            return data.data.data;
        })
        .catch((error) =>  (console.log(error)))
}

export const createUnit = (unit) => {
    api.post('units', {
        name: unit.name,
        photoPath: unit.photoPath,
        country: unit.country,
        state: unit.state,
        city: unit.city,
        zipCode: unit.zipCode,
        address: unit.address,
        phoneNumber: unit.phoneNumber,
        businessId: unit.businessId,
        activeDays: unit.activeDays
    })
}