import React from "react";
import { Outlet } from "react-router-dom";
import { ProfessionalsProvider } from "../../../contexts/ProfessionalsContext";

const Professionals = () => {
    return (
        <ProfessionalsProvider>
            <Outlet />
        </ProfessionalsProvider>
    );
}

export default Professionals;