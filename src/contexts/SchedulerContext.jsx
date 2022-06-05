import React, { createContext, useContext, useEffect, useState } from "react";
import { getProfessionalsByBusiness } from "../services/Professionals/professionalsApi";
import { BusinessContext } from "./BusinessContext";

export const SchedulerContext = createContext();

export const SchedulerContextProvider = ({children}) => { 
    const { businessId } = useContext(BusinessContext);
    const [professionalsList, setProfessionalsList] = useState(null);
    const [currentDate, setCurrentDate] = useState();
    const [currentDay, setCurrentDay] = useState();
    const [currentMonth, setCurrentMonth] = useState();
    const today = new Date();

    useEffect(() => {
        setCurrentDate(today);
        setCurrentDay(today.getDate());
        setCurrentMonth(today.getMonth());

        getProfessionalsByBusiness(businessId)
            .then((data) => {
                setProfessionalsList(data.items);
            })
    }, []);

    const addCurrentDate = () => {
        console.log(currentDay);
        setCurrentDate(currentDate.getDate()+1)
        setCurrentDay(currentDate.getDate())
        console.log(currentDate);
    }

    const subCurrentDate = () => {

    }

    return(
        <SchedulerContext.Provider value={{professionalsList, today, currentDay, currentMonth, addCurrentDate}}>
            {children}
        </SchedulerContext.Provider>
    );
}