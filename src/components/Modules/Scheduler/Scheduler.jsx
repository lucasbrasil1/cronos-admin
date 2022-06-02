import React, { useContext } from "react";
import { SchedulerContext } from "../../../contexts/SchedulerContext";
import { PageTitle } from "../../Common/PageTitle";
import { SchedulerDateSelector } from "./SchedulerDateSelector";
import { SchedulerProfessionalSelector } from "./SchedulerProfessionalSelector";
import { SchedulerTimes } from "./SchedulerTimes";

const Scheduler = () => {
    const { professionalsList } = useContext(SchedulerContext);

    return(
        <div className="d-flex flex-column text-center">
            <PageTitle>Agendamento</PageTitle>
            <div className="row">
                <SchedulerDateSelector />
                <SchedulerProfessionalSelector professionals={professionalsList} />
            </div>
            <div className="row">
                <SchedulerTimes />
            </div>
        </div>
    );
}

export default Scheduler;