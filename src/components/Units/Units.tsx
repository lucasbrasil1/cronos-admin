import React from "react";
import { Outlet } from "react-router-dom";
import UnitsContextProvider from "../../contexts/UnitsContext";

export const Units = () => {
    return (
        <UnitsContextProvider>
            <Outlet />
        </UnitsContextProvider>
    );
}

export default Units;