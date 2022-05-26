import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { getWorksByBusiness } from "../../services/Works/worksApi";
import { Modal } from "../Common/Modal";
import { PageTitle } from "../Common/PageTitle";
import { Table } from "../Common/Table";
import { TableBodyRow } from "../Common/TableBodyRow";
import { TableHeaderRow } from "../Common/TableHeaderRow";

const WorksList = () => {
    const { businessId } = useContext(AuthContext);

    const [data, setData] = useState(null);
    const [workItems, setWorkItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWorksByBusiness(businessId)
            .then((response) => {
                setData(response.data.data)
                setWorkItems(response.data.data.items)
            })
            .catch((error) => { setError(error) })
            .finally(() => { setLoading(false) });
    }, []);

    const handleDelete = (id) => {
        console.log(id);

        api.delete(`/works?id=${id}`)
        .then((response) => console.log(response))
        .catch ((e) => console.log(e))
        .finally(
            
        );
    }

return (
    <div className="d-flex flex-column text-center gap-3">
        <PageTitle>Lista de serviços</PageTitle>
        <Table color="dark">
            <TableHeaderRow>
                <th className="col-7" scope="col">Nome</th>
                <th className="col-1" scope="col">Valor</th>
                <th className="col-1" scope="col">Tempo</th>
                <th className="col-1" scope="col" />
                <th className="col-1" scope="col" />
            </TableHeaderRow>
            <tbody>
                {workItems?.map((work) => <TableBodyRow key={work.id} id={work.id} name={work.name} price={work.price} time={`${work.hour}:${work.minute}`} handleDelete={handleDelete} />)}
            </tbody>
        </Table>
        <Link to="new">
            <button className="btn btn-primary">
                Adicionar Serviço
            </button>
        </Link>
        <Modal id="modalDelete" title="Deletar" body="Tem certeza que deseja deletar o serviço?" buttonText="Deletar" buttonColor="secondary" />
    </div>
);
}

export default WorksList;