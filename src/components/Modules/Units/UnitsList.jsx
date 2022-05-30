import { Link } from "react-router-dom";
import { PageTitle } from "../../Common/PageTitle";
import Table from "../../Common/Table";
import TableHeaderRow from "../../Common/TableHeaderRow";
import { UnitRow } from "./UnitRow";

const UnitsList = () => {
    return(
        <div className="d-flex flex-column text-center gap-3">
            <PageTitle>Unidades</PageTitle>
            <Table color="dark">
                <TableHeaderRow>
                    <th className="col-5" scope="col">Nome</th>
                    <th className="col-5" scope="col">Cidade</th>
                    <th className="col-1" scope="col" />
                    <th className="col-1" scope="col" />
                </TableHeaderRow>
                <tbody>
                    
                </tbody>
            </Table>
            <Link to="new">
                <button className="btn btn-primary">
                    Adicionar Unidade
                </button>
            </Link>
        </div>
    );
}

export default UnitsList;

/**
 * {unitItems?.map((unit) => 
                    <UnitRow 
                    key={unit.id}
                    id={unit.id}
                    name={unit.name}
                    />
                    )}
 */