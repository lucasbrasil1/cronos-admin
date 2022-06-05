import React, { useContext } from "react";
import { TextField } from "../../Common/TextField";
import { UnitsContext } from "../../../contexts/UnitsContext";
import { ActiveDays } from "./ActiveDays";

const NewUnitForm = () => {
  const {
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
    handlePhoneNumberChange
  } = useContext(UnitsContext);



  return (
    <div className="d-flex flex-column gap-3">
      <form className="form">
        <div className="row">
          <TextField
            id="unitName"
            label="Nome:"
            value={unitName}
            onChange={handleNameChange}
            size="6"
          />
          <TextField
            id="unitZipCode"
            label="Cep:"
            value={zipCode}
            onChange={handleZipCodeChange}
            size="6"
          />
          <TextField
            id="unitPhoto"
            label="Foto:"
            value={photoPath}
            onChange={handlePhotoPathChange}
            size="6"
          />
          <TextField id="country" label="País:" value={country} onChange={handleCountryChange} size="6" />
          <TextField id="state" label="Estado:" value={state} onChange={handleStateChange} size="6" />
          <TextField id="city" label="Cidade:" value={city} onChange={handleCityChange} size="6" />
          <TextField id="address" label="Endereço:" value={address} onChange={handleAddressChange} size="6" />
          <TextField id="phoneNumber" label="Telefone:" value={phoneNumber} onChange={handlePhoneNumberChange} size="6" />
        </div>
        <hr />
        <div className="row">
          <ActiveDays />
        </div>
      </form>
    </div>
  );
}

export default NewUnitForm;

/**
 * "name": "string",
 "zipCode": "string",
  "photoPath": "string",
  "country": "string",
  "state": "string",
  "city": "string",
  "address": "string",
  "phoneNumber": "string",
  "businessId": 0,
  "activeDays": [

    {
      "id": 0,
      "createdAt": "2022-05-27T20:23:59.125Z",
      "deletedAt": "2022-05-27T20:23:59.125Z",
      "unitId": 0,
      "dayOfWeek": 0,
      "startTime1": {
        "hour": 0,
        "minute": 0
      },
      "endTime1": {
        "hour": 0,
        "minute": 0
      },
      "startTime2": {
        "hour": 0,
        "minute": 0
      },
      "endTime2": {
        "hour": 0,
        "minute": 0
      },
      "active": true
    }
  ]
 */