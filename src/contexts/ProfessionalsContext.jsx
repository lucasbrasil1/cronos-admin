import React, { createContext, useContext, useEffect, useState } from "react";
import { createProfessional, getProfessionalsByBusiness } from "../services/Professionals/professionalsApi";
import { BusinessContext } from "./BusinessContext";

export const ProfessionalsContext = createContext();

export const ProfessionalsProvider = ({ children }) => {
    const { businessId } = useContext(BusinessContext);

    const [professionalName, setName] = useState("");
    const [professionalDocument, setDocument] = useState("");
    const [professionalPhoneNumber, setPhoneNumber] = useState("");
    const [professionalPhoto, setPhoto] = useState("");
    const [professionalDescription, setDescription] = useState("");

    const handleNameChange = (e) => { setName(e.target.value) }
    const handleDocumentChange = (e) => { setDocument(e.target.value) }
    const handlePhoneChange = (e) => { setPhoneNumber(e.target.value) }
    const handlePhotoChange = (e) => { setPhoto(e.target.value) }
    const handleDescriptionChange = (e) => { setDescription(e.target.value) }

    const [professionalsList, setProfessionalsList] = useState(null);


    useEffect(() => {
        getProfessionalsByBusiness(businessId)
            .then((data) => {
                setProfessionalsList(data.items);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            cpf: professionalDocument,
            name: professionalName,
            phoneNumber: professionalPhoneNumber,
            description: professionalDescription,
            photoPath: professionalPhoto
          }
        createProfessional(request);
    }

    return (
        <ProfessionalsContext.Provider value={{
            handleSubmit,
            professionalName,
            handleNameChange,
            professionalDocument,
            handleDocumentChange,
            professionalPhoneNumber,
            handlePhoneChange,
            professionalPhoto,
            handlePhotoChange,
            professionalDescription,
            handleDescriptionChange,
            professionalsList
        }}>
            {children}
        </ProfessionalsContext.Provider>
    );
}