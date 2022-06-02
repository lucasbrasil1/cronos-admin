import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Modules/Sidebar/Sidebar";

const Layout = () => {
    return (
        <div className="d-flex flex-row h-100">
            <Sidebar />
            <div className="container h-100">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;