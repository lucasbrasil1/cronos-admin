import { useContext, useState } from "react";
import { UnitsContext, UnitsContextType } from "../../contexts/UnitsContext";

export const TimeInput = () => {
    const { 
        startTime, 
        handleStartTimeChange, 
        endTime,
        handleEndTimeChange,
     } = useContext(UnitsContext) as UnitsContextType;

    return (
        <>
            <div className="input-group mt-1">
                <span className="input-group-text" style={{ width: '60px' }} id="inicio">Início</span>
                <input 
                type="time" 
                className="form-control" 
                value={startTime}
                onChange={handleStartTimeChange}
                />
            </div>
            <div className="input-group mt-1">
                <span className="input-group-text" style={{ width: '60px' }} id="inicio">Fim</span>
                <input 
                type="time" 
                className="form-control"
                value={endTime}
                onChange={handleEndTimeChange}
                />

            </div>
        </>
    );

}