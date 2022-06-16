import getTime from "date-fns/esm/fp/getTime/index.js";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { IDay, ITimeRange } from "../Interfaces";
import { BusinessContext } from "./BusinessContext";


const defaultDays: IDay[] = [
    {
        name: "all",
        abreviation: "Todos",
        isActive: true,
        availableHours: []
    }, {
        name: "sunday",
        abreviation: "D",
        isActive: false,
        availableHours: []
    },
    {
        name: "monday",
        abreviation: "S",
        isActive: true,
        availableHours: []
    },
    {
        name: "tuesday",
        abreviation: "T",
        isActive: true,
        availableHours: []
    },
    {
        name: "wednesday",
        abreviation: "Q",
        isActive: true,
        availableHours: [],

    },
    {
        name: "thursday",
        abreviation: "Q",
        isActive: true,
        availableHours: []
    },
    {
        name: "friday",
        abreviation: "S",
        isActive: true,
        availableHours: [],
    },
    {
        name: "saturday",
        abreviation: "S",
        isActive: false,
        availableHours: [],
    }];


interface IUnit {
    businessId: number;
    name: string;
    photoPath: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    address: string;
    phoneNumber: string;
    activeDays: [IDay];
}

export type UnitsContextType = {


    //#region UnitInput
    unitName: string;
    handleUnitNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    zipCode: string;
    handleZipCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    photoPath: string;
    handlePhotoPathChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    country: string;
    handleCountryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    state: string;
    handleStateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    city: string;
    handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    address: string;
    handleAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    phoneNumber: string;
    handlePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

    //#endregion UnitInput

    //#region DaysOfWeek

    days: IDay[],
    switchIsActive: boolean;
    currentDay: IDay;
    updateDayIsActive: (day: IDay) => void;
    handleButtonGroupOnClick: (day: IDay) => void;

    //#endregion DaysOfWeek

    //#region TimeRanges 

    startTime: string
    handleStartTimeChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    endTime: string
    handleEndTimeChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    //#endregion TimeRanges

    handleSubitNewUnitForm: () => void;
}

interface IUnitsContext {
    children: React.ReactNode;
}

export const UnitsContext = createContext<UnitsContextType | null>(null);

const UnitsContextProvider = ({ children }: IUnitsContext) => {
    const { businessId } = useContext(BusinessContext);

    //#region Unit
    const [unitName, setUnitName] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    const [photoPath, setPhotoPath] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleUnitNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setUnitName(e.target.value) }
    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setZipCode(e.target.value) }
    const handlePhotoPathChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPhotoPath(e.target.value) }
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => { setCountry(e.target.value) }
    const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => { setState(e.target.value) }
    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => { setAddress(e.target.value) }
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPhoneNumber(e.target.value) }

    //#endregion Unit

    //#region DaysOfWeek
    const [days, setDays] = useState<IDay[]>(defaultDays);
    const [switchIsActive, setSwitchIsActive] = useState<boolean>(false);
    const [currentDay, setCurrentDay] = useState<IDay>(days[0]);

    //#endregion DaysOfWeek

    //#region Times

    const [startTime, setStartTime] = useState<string>("");
    const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setStartTime(e.target.value); }
    const [endTime, setEndTime] = useState<string>("");
    const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEndTime(e.target.value); }

    //#endregion Times
    const [unit, setUnit] = useState<IUnit>();


    const handleSubitNewUnitForm = () => {
        console.log(unit);
    }

    const handleButtonGroupOnClick = (day: IDay) => {
        setCurrentDay(day);
        handleIsActiveVisibility(day);
    }

    const handleIsActiveVisibility = (day: IDay) => {
        setSwitchIsActive(day.name === "all" ? false : true)
    }

    const updateDayIsActive = (day: IDay) => {
        days.filter((d) => {
            if (d.name === day.name) {
                day.isActive = !day.isActive;
                setDays([...days]);
            }
        })
    }

    
    return (
        <UnitsContext.Provider value={{
            //#region UnitInput
            unitName,
            handleUnitNameChange,
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
            //#endregion UnitInput

            //#region DaysOfWeek
            days,
            switchIsActive,
            currentDay,
            updateDayIsActive,
            handleButtonGroupOnClick,
            //#endregion DaysOfWeek

            //#region Times
            startTime,
            handleStartTimeChange,
            endTime,
            handleEndTimeChange,
            //#endregion Times

            handleSubitNewUnitForm
        }}>
            {children}
        </UnitsContext.Provider>
    );
}

export default UnitsContextProvider;