import { FC, useContext } from "react";
import { UnitsContext, UnitsContextType } from "../../contexts/UnitsContext";
import { TimeInput } from "../Common/TimeInput";

export const DaysOfWeek: FC = () => {
    const {
        days,
        switchIsActive,
        currentDay,
        updateDayIsActive,
        handleButtonGroupOnClick
    } = useContext(UnitsContext) as UnitsContextType;

    return (
        <div>
            <div className="btn-group d-flex" role="group">
                {days?.map((item) => {
                    return (
                        <div key={item.name} className={`btn btn-sm ${item.isActive ? "btn-success" : "btn-secondary"}`} onClick={() => { handleButtonGroupOnClick(item) }}>{item.abreviation}</div>
                    );
                })}
            </div>
            <div>
                {switchIsActive && (
                    <div className="form-check form-switch mx-3 mt-2">
                        <input className="form-check-input" type="checkbox" checked={currentDay?.isActive} onChange={() => (updateDayIsActive(currentDay))} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Ativo</label>
                    </div>
                )}
                <TimeInput />
            </div>
        </div>
    );
}