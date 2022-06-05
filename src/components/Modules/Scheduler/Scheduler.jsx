import React, { useContext } from "react";
import { SchedulerContext } from "../../../contexts/SchedulerContext";
import { SchedulerDateSelector } from "./SchedulerDateSelector";
import { SchedulerProfessionalSelector } from "./SchedulerProfessionalSelector";
import { SchedulerTimes } from "./SchedulerTimes";

const Scheduler = () => {
    const { professionalsList, today, currentDate, handleDateChange } = useContext(SchedulerContext);

    return(
        <div className="d-flex flex-column text-center">
            <div className="row">
                <SchedulerDateSelector/>
                <SchedulerProfessionalSelector professionals={professionalsList} />
            </div>
            <div className="row">
                <SchedulerTimes today={today} currentDate={currentDate} />
            </div>
        </div>
    );
}

export default Scheduler;