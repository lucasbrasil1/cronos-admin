import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import { getWorksByBusiness } from "../../../services/Works/worksApi";
import Table from "../../Common/Table";
import TableHeaderRow from "../../Common/TableHeaderRow";

const WorksList = () => {
    const [workItems, setWorkItems] = useState([]);

    useEffect(() => {
        getWorksByBusiness(0)
            .then((response) => {
                setWorkItems(response.data.data.items)
            })
            .catch((error) => { 
            })
            .finally(() => {  });
    }, []);

    const handleDelete = (id) => {
        console.log(id);

        api.delete(`/works?id=${id}`)
            .then((response) => console.log(response))
            .catch((e) => console.log(e))
            .finally(

            );
    }

    return (
        <div className="d-flex flex-column text-center gap-3">
            <Table color="dark">
                <TableHeaderRow>
                    <th className="col-7" scope="col">Nome</th>
                    <th className="col-1" scope="col">Valor</th>
                    <th className="col-1" scope="col">Tempo</th>
                    <th className="col-1" scope="col" />
                    <th className="col-1" scope="col" />
                </TableHeaderRow>
                <tbody>
                    
                </tbody>
            </Table>
            <Link to="new">
                <button className="btn btn-primary">
                    Adicionar Serviço
                </button>
            </Link>
        </div>
    );
}

export default WorksList;

//{workItems?.map((work) => <TableBodyRow key={work.id} id={work.id} name={work.name} price={work.price} time={`${work.hour}:${work.minute}`} handleDelete={handleDelete} />)}