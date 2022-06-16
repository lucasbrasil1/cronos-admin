import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfessionalsContext } from "../../contexts/ProfessionalsContext";
import { IProfessional } from "../../Interfaces";
import TableHeaderRow from "../Common/TableHeaderRow";

const ProfessionalsList = () => {
    const { professionalsList } = useContext(ProfessionalsContext);

    return (
        <div className="d-flex flex-column text-center gap-3">
            <table className={'table table-hover table-dark'}>
                <TableHeaderRow>
                    <th className="col-5" scope="col">Foto</th>
                    <th className="col-5" scope="col">Nome</th>
                    <th className="col-1" scope="col" />
                    <th className="col-1" scope="col" />
                </TableHeaderRow>
                <tbody>
                    {professionalsList?.map((item : IProfessional) => {
                        return(
                            <tr key={item.id}>
                                <td>Foto</td>
                                <td>{item.name}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to="new">
                <button className="btn btn-primary">
                    Adicionar Profissional
                </button>
            </Link>
        </div>
    );
}

export default ProfessionalsList;