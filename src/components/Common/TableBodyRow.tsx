import React from "react";
import { IconDelete } from "./IconDelete";
import { IconEdit } from "./IconEdit";

interface ITableBodyRow {
    id: string;
    name: string;
    price: number;
    time: string;
    handleDelete : (id : string) => void; 
}

export const TableBodyRow = ({id, name, price, time, handleDelete} : ITableBodyRow) => {
    return (
        <tr id={id}>
            <td>{name}</td>
            <td>{price}</td>
            <td>{time}</td>
            <td>
                <span >
                    <IconEdit color="white" size={16} />
                </span>
            </td>
            <td>
                <span data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => (handleDelete(id))}>
                    <IconDelete color="white" size={16} />
                </span>
            </td>
        </tr>
    );
}

export default TableBodyRow;