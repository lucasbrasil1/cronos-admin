import { set } from "date-fns";
import React, { createContext, useContext, useState } from "react";
import { BusinessContext } from "./BusinessContext";

export const UnitsContext = createContext();

const UnitsContextProvider = ({ children }) => {
    const { businessId } = useContext(BusinessContext);

    const [unitName, setUnitName] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [photoPath, setPhotoPath] = useState();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [activeDays, setActiveDays] = useState();

    const handleNameChange = (e) => { setUnitName(e.target.value); }
    const handleZipCodeChange = (e) => { setZipCode(e.target.value); }
    const handlePhotoPathChange = (e) => { setPhotoPath(e.target.value) }
    const handleCountryChange = (e) => { setCountry(e.target.value) }
    const handleStateChange = (e) => { setState(e.target.value) }
    const handleCityChange = (e) => { setCity(e.target.value) }
    const handleAddressChange = (e) => { setAddress(e.target.value) }
    const handlePhoneNumberChange = (e) => { setPhoneNumber(e.target.value) }
    const handleActiveDaysChange = (e) => { setActiveDays(e.target.value) }

    return (
        <UnitsContext.Provider value={{
            unitName,
            handleNameChange,
            zipCode,
            handleZipCodeChange,
            photoPath,
            handlePhotoPathChange,
            country,
            handleCountryChange,
            state,
            handleStateChange,
            city,
            handleCityChange,
            address,
            handleAddressChange,
            phoneNumber,
            handlePhoneNumberChange,
            activeDays,
            handleActiveDaysChange

        }}>
            {children}
        </UnitsContext.Provider>
    );
}

export default UnitsContextProvider;