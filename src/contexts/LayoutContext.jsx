import { createContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({children}) => {
    const [pageTitle, setPageTitle] = useState("Cronos");

    const handlePageTitleChange = (value) => {
        setPageTitle(value);
    }

    return(
        <LayoutContext.Provider value={{pageTitle, handlePageTitleChange}}>
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutContext;