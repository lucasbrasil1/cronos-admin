import React from "react";

interface ITableHeaderRow {
    children : React.ReactNode;
}

export const TableHeaderRow = ({children} : ITableHeaderRow) => {
    return(
        <thead>
            <tr>
                {children}
            </tr>
        </thead>
    );
}

export default TableHeaderRow;