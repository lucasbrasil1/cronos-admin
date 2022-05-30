import { createContext, useContext, useEffect, useState } from "react";
import { getProfessionalsByBusiness } from "../services/Professionals/professionalsApi";
import { BusinessContext } from "./BusinessContext";

export const ProfessionalsContext = createContext();

export const ProfessionalsProvider = ({children}) => {
    const { businessId } = useContext(BusinessContext);
    const [ data, setData ] = useState(null);
    const [ professionals, setProfessionals ] = useState("null");

    console.log(businessId);

    useEffect(() => {
        getProfessionalsByBusiness(businessId)
            .then((data) => {
                setData(data);
                console.log(data);
            })
    }, []);

    return(
        <ProfessionalsContext.Provider value={{professionals}}>
            {children}
        </ProfessionalsContext.Provider>
    );
}