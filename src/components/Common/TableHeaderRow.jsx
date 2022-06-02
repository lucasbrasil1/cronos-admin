import React from "react";

export const TableHeaderRow = ({children}) => {
    return(
        <thead>
            <tr>
                {children}
            </tr>
        </thead>
    );
}

export default TableHeaderRow;