import React, { createContext, useContext, useEffect, useState } from "react";
import { createBusiness, getBusinessByBusinessOwner, updateBusiness } from "../services/Business/businessApi";
import { getProfessionalsByBusiness } from "../services/Professionals/professionalsApi";
import { AuthContext } from "./auth";

export const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
    const { businessOwnerId } = useContext(AuthContext);

    const [businessId, setBusinessId] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [description, setDescription] = useState("");
    const [pathLogo, setPathLogo] = useState("");
    const [edited, setEdited] = useState(false);
    const [prevName, setPrevName] = useState("");
    const [prevDescription, setPrevDescription] = useState("");

    const [data, setData] = useState(null);
    const [businessExists, setBusinessExists] = useState(false);

    useEffect(() => {
        getBusinessByBusinessOwner(businessOwnerId)
            .then((data) => {
                setBusinessExists(true);
                setData(data);
                updateInputValues(data);
            })
            .catch((error) => {
                setBusinessExists(false);
            });
    }, [])


    const handleBusinessName = (e) => {
        setEdited(prevName !== e.target.value);
        setBusinessName(e.target.value);
    }

    const handleDescription = (e) => {
        setEdited(prevDescription !== e.target.value);
        setDescription(e.target.value);
    }

    const handleUpdate = () => {
        updateBusiness({
            businessId: businessId,
            name: businessName,
            description: description,
            pathLogo: "",
            businessOwnerId: businessOwnerId
        })
            .then((r) => console.log(r))
    }

    const createNewBusiness = () => {
        createBusiness({
            name: businessName,
            description: description,
            pathLogo: "",
            businessOwnerId: businessOwnerId
        }).then((response) => {
            console.log("created:", response)
            setData(response);
        });
    }

    const updateInputValues = (data) => {
        setPrevName(data.name);
        setBusinessName(data.name);
        setPrevDescription(data.description);
        setDescription(data.description);
        setBusinessId(data.id);
    }


    return (
        <BusinessContext.Provider value={{ businessId, businessName, handleBusinessName, description, handleDescription, edited, handleUpdate, businessExists, createNewBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
}