import React, { createContext, useContext, useEffect, useState } from "react";
import { getProfessionalsByBusiness } from "../services/Professionals/professionalsApi";
import { BusinessContext } from "./BusinessContext";

export const SchedulerContext = createContext();

export const SchedulerContextProvider = ({children}) => { 
    const { businessId } = useContext(BusinessContext);
    const [professionalsList, setProfessionalsList] = useState(null);

    useEffect(() => {
        getProfessionalsByBusiness(businessId)
            .then((data) => {
                setProfessionalsList(data.items);
            })
    }, [])

    return(
        <SchedulerContext.Provider value={{professionalsList}}>
            {children}
        </SchedulerContext.Provider>
    );
}