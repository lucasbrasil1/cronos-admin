import { useContext } from "react";
import { PageTitle } from "../../Common/PageTitle";
import { ProfessionalsContext } from "../../../contexts/ProfessionalsContext";

const NewProfessionalForm = () => {
    const {} = useContext(ProfessionalsContext);


    return (
        <div className="d-flex flex-column gap-3">
            <PageTitle>Adicionar Profissional</PageTitle>
            <form className="form">
                <div className="row">
                    
                </div>
            </form>
        </div>
    );
}

export default NewProfessionalForm;