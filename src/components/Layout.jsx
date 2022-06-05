import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Modules/Sidebar/Sidebar";
import Header from "./Modules/Header/Header"
import LayoutContext from "../contexts/LayoutContext";

const Layout = () => {
    const { pageTitle, handleLogout } = useContext(LayoutContext);

    return (
        <div className="d-flex flex-column h-100">
            <Header pageTitle={pageTitle} />
            <div className="d-flex flex-row h-100">
                <Sidebar params={handleLogout} />
                <div className="container h-100 mt-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;