import React, { useContext } from "react";
import { ProfessionalsContext } from "../../contexts/ProfessionalsContext";
import TextareaField from "../Common/TextareaField";
import TextField from "../Common/TextField";

const NewProfessionalForm = () => {
    const { 
        handleSubmit,
        professionalName,
        handleNameChange,
        professionalDocument,
        handleDocumentChange,
        professionalPhoneNumber,
        handlePhoneChange,
        professionalPhoto,
        handlePhotoChange,
        professionalDescription,
        handleDescriptionChange
     } = useContext(ProfessionalsContext);


    return (
        <div className="d-flex flex-column gap-3">
            <form className="form" onSubmit={handleSubmit}>
                <div className="row my-1">
                    <TextField
                        id="professionalName"
                        label="Nome:"
                        size="12"
                        value={ professionalName }
                        onChange={handleNameChange}
                    />
                </div>
                <div className="row my-1">
                    <TextField
                        id="professionalDocument"
                        label="Cpf:"
                        size="12"
                        value={professionalDocument}
                        onChange={handleDocumentChange}
                    />
                </div>
                <div className="row my-1">
                    <TextField
                        id="professionalPhoneNumber"
                        label="Telefone:"
                        size="12"
                        value={professionalPhoneNumber}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="row my-1">
                    <label className="form-label" htmlFor="uploadPhoto">Foto:</label>
                    <div className="input-group mb-2">
                        <input type="file" 
                        className="form-control" 
                        id="uploadPhoto"
                        value={professionalPhoto}
                        onChange={handlePhotoChange}
                         />
                    </div>
                </div>
                <div className="row">
                    <TextareaField
                        id="professionalDescription"
                        label="Descrição:"
                        value={professionalDescription}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div className="row m-1">
                    <button type="submit" className="btn btn-primary">Criar Profissional</button>
                </div>
            </form>
        </div>
    );
}

export default NewProfessionalForm;