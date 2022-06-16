import React, { useContext } from "react";
import { SchedulerContext } from "../../contexts/SchedulerContext";

export const SchedulerDateSelector = () => {
    const { 
        currentDate, 
        currentMonth,
        currentDay,
        addCurrentDate,
        subCurrentDate
     } = useContext(SchedulerContext);

    return (
        <div className="col-6">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className="input-group  align-middle mt-2">
                <button onClick={subCurrentDate} className="btn btn-outline-secondary col-3" type="button" id="button-addon1">L</button>
                <div className="col-6">
                    <h4>{currentDay} / {currentMonth}</h4>
                </div>
                <button onClick={addCurrentDate} className="btn btn-outline-secondary col-3" type="button" id="button-addon2">R</button>
            </div>
        </div>
    );
}