import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
    return(
        <div className="d-flex flex-row h-100">
            <Sidebar />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;