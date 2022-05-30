import { Link } from "react-router-dom";
import { PageTitle } from "../../Common/PageTitle";
import Table from "../../Common/Table";
import TableHeaderRow from "../../Common/TableHeaderRow";

const ProfessionalsList = () => {
    return (
        <div className="d-flex flex-column text-center gap-3">
            <PageTitle>Profissionais</PageTitle>
            <Table color="dark">
                <TableHeaderRow>
                    <th className="col-5" scope="col">Foto</th>
                    <th className="col-5" scope="col">Nome</th>
                    <th className="col-1" scope="col" />
                    <th className="col-1" scope="col" />
                </TableHeaderRow>
                <tbody>

                </tbody>
            </Table>
            <Link to="new">
                <button className="btn btn-primary">
                    Adicionar Profissional
                </button>
            </Link>
        </div>
    );
}

export default ProfessionalsList;