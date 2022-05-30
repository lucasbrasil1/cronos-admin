import { IconDelete } from "./IconDelete";
import { IconEdit } from "./IconEdit";

export const TableBodyRow = ({id, name, price, time, handleDelete}) => {
    return (
        <tr id={id}>
            <td>{name}</td>
            <td>{price}</td>
            <td>{time}</td>
            <td>
                <span >
                    <IconEdit />
                </span>
            </td>
            <td>
                <span data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => (handleDelete(id))}>
                    <IconDelete color="white" size="16" />
                </span>
            </td>
        </tr>
    );
}

export default TableBodyRow;