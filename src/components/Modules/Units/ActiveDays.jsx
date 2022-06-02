import React, { useEffect, useState } from "react";

const day = (name, abreviation, isActive) => {
    return (
        {
            dayOfWeek: name,
            abreviation: abreviation,
            isActiveDay: isActive
        }
    );
}

export const ActiveDays = () => {
    const [switchVisible, setSwitchVisible] = useState(false);

    const [sunday, setSunday] = useState(day("Sunday", "D", false));
    const [monday, setMonday] = useState(day("Monday", "S", true));
    const [tuesday, setTuesday] = useState(day("Tuesday", "T", true));
    const [wednesday, setWednesday] = useState(day("Wednesday", "Q", true));
    const [thursday, setThursday] = useState(day("Thursday", "Q", true));
    const [friday, setFriday] = useState(day("Friday", "S", true));
    const [saturday, setSaturday] = useState(day("Saturday", "S", false));

    const [isActiveDay, setIsActiveDay] = useState();

    const [currentDay, setCurrentDay] = useState();

    const days = [
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday
    ]

    const handleButtonGroupOnClick = (v) => {
        handleSwitchVisibility(v);
        setIsActiveDay(v.isActiveDay);
        setCurrentDay(v);
    }

    const handleSwitchVisibility = (v) => {
        setSwitchVisible(v.dayOfWeek !== "All")
    }

    const handleCheckbox = (currentDay) => {
        setIsActiveDay(!currentDay.isActiveDay);
        setCurrentDay(currentDay => ({
            dayOfWeek : currentDay.dayOfWeek,
            abreviation : currentDay.abreviation,
            isActiveDay : !currentDay.isActiveDay
        }));
    }

    return (
        <div>
            <h2>Horários</h2>
            <div className="btn-group d-flex">
                <div className="btn btn-primary" onClick={() => { handleButtonGroupOnClick({dayOfWeek: "All"}) }}>Todos</div>
                {days?.map((item) => {
                    return (
                        <div key={item.dayOfWeek} className={`btn ${item.isActiveDay ? "btn-primary" : "btn-secondary"}`} onClick={() => { handleButtonGroupOnClick(item) }}>{item.abreviation}</div>
                    );
                })}
            </div>
            <div>
                {switchVisible && (
                <div className="form-check form-switch mx-3 mt-2">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={!!isActiveDay} onChange={() => {handleCheckbox(currentDay)}}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Ativo</label>
                </div>
                )}

                <div className="input-group mt-3">
                    <span className="input-group-text" style={{ width: '76px' }} id="inicio">Início</span>
                    <input type="time" className="form-control" placeholder="Início" aria-label="Início" aria-describedby="inicio" />
                </div>
                <div className="input-group">
                    <span className="input-group-text" style={{ width: '76px' }} id="inicio">Fim</span>
                    <input type="time" className="form-control" placeholder="Fim" aria-label="Fim" aria-describedby="fim" />
                </div>
                <div>
                    <button className="btn btn-sm btn-primary w-100">
                        Adicionar horário
                    </button>
                </div>
            </div>
        </div>
    );
}