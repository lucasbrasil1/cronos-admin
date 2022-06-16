import React, { useContext } from "react";
import { SchedulerContext } from "../../contexts/SchedulerContext";

export const SchedulerTimes = () => {
    const { currentDay, currentMonth } = useContext(SchedulerContext);

    const startDate = new Date();
    const endDate = new Date();

    startDate.setHours(9, 30);
    endDate.setHours(12, 0);

    const checkTimeRange = () => {
        var inicio = new Date("2022-06-05T09:30:00");
        var fim = new Date("2022-06-05T12:00:00");
        var diferenca = new Date( fim - inicio );

        var resultado = diferenca.getUTCHours() + "h ";
        resultado += diferenca.getUTCMinutes() + "m ";
        resultado += diferenca.getUTCSeconds() + "s ";
        console.log(resultado);
    }

    const mapHours = () => {
        console.log(startDate.getHours());
        console.log(endDate.getHours());
        const diff = new Date(endDate - startDate);

        console.log(diff);

    }

    return (
        <div className="container mt-4">
            <div className="row">Datas</div>
            <div className="row">
                <div className="col-2">
                    {checkTimeRange()}
                </div>
                <div className="col-5">dia 1</div>
                <div className="col-5">dia 2</div>
            </div>
        </div >
    );
}