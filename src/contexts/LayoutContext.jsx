import { createContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [pageTitle, setPageTitle] = useState("Cronos");
    const [sidebarCurrent, setSidebarCurrent] = useState();

    const handleSidebarCurrent = (id) => {
        setSidebarCurrent(id);
    }

    const handlePageTitleChange = (value) => {
        setPageTitle(value);
    }

    return (
        <LayoutContext.Provider value={{
            pageTitle,
            handlePageTitleChange,
            sidebarCurrent,
            handleSidebarCurrent
        }}>
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutContext;