import React from "react";
import { IUnitRow } from "../../Interfaces";
import { IconDelete } from "../Common/IconDelete";
import { IconEdit } from "../Common/IconEdit";

export const UnitRow = ({id, name, city} : IUnitRow) => {
    return(
        <tr id={id}>
            <td>{name}</td>
            <td>{city}</td>
            <td><IconEdit color="white" size={16}/></td>
            <td><IconDelete color="white" size={16}/></td>
        </tr>
    );
}