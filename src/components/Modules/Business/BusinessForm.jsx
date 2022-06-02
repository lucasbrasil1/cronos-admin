import React, { useContext } from "react";
import { BusinessContext } from "../../../contexts/BusinessContext";
import { PageTitle } from "../../Common/PageTitle";
import TextareaField from "../../Common/TextareaField";
import TextField from "../../Common/TextField";

export const BusinessForm = () => {
    const { businessName,
        handleBusinessName,
        description,
        handleDescription,
        edited,
        handleUpdate,
        businessExists, 
        createNewBusiness
    } = useContext(BusinessContext);

    return (
        <>
            <div className="d-flex flex-column text-center gap-3">
                <PageTitle>Negócio</PageTitle>
                <div className="container text-start">
                    <TextField
                        id="businessName"
                        label="Nome:"
                        type="text"
                        value={businessName}
                        onChange={handleBusinessName}
                    />
                    <TextareaField
                        id="businessDescription"
                        label="Descrição:"
                        type="text"
                        value={description}
                        onChange={handleDescription}
                    />
                    <div className="row mb-3">
                    <label className="form-label" htmlFor="businessLogo">Logo:</label>
                        <div style={{ width: '250px', height: "250px", backgroundColor: "gray", borderRadius: '100%' }}>
                            <img id="previewLogo" alt="Preview Logo" className="rounded img-fluid" src="..." />
                            <input type="file" id="businessLogo" />
                        </div>
                    </div>
                </div>
                <div className="flex-row d-flex justify-content-end">
                    <button
                        className={`btn btn-primary ${edited ? 'visible' : 'invisible'}`}
                        
                        data-bs-toggle="modal" data-bs-target="#confirmBusinessUpdateModal"
                    >Salvar</button>
                </div>
            </div>
            <div className="modal fade" id="confirmBusinessUpdateModal" tabIndex="-1" aria-labelledby="confirmBusinessUpdateModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmar alteração</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Deseja salvar as alterações?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={businessExists ? handleUpdate : createNewBusiness}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BusinessForm;