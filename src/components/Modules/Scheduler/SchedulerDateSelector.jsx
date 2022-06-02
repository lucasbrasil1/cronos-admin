import React from "react";

export const SchedulerDateSelector = () => {
    return (
        <div className="col-6">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option defaultValue={0}>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className="input-group mt-2">
                <div className="input-group">
                    <button className="btn btn-outline-secondary col-2" type="button" id="button-addon1">L</button>
                    <input type="date" className="form-control form-control-sm" id="date" />
                    <button className="btn btn-outline-secondary col-2" type="button" id="button-addon2">R</button>
                </div>
            </div>
        </div>
    );
}