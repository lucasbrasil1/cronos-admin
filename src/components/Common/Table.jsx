import React from "react";

export const Table = ({ children }) => {
    return (
    <table className={'table table-hover table-dark'}>
        {children}
    </table>
    );
} 

export default Table;