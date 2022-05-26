import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { PageTitle } from "../Common/PageTitle";
import { TextareaField } from "../Common/TextareaField";
import { TextField } from "../Common/TextField";

const Business = () => {
    const [business, setBusiness] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photoPath, setPhotoPath] = useState("");
    const [edited, setEdited] = useState(false);
    const [erro, setErro] = useState(null);
    const businessId = 1;

    useEffect(() => {
        api.get(`businesses/${businessId}`)
            .then(({ data }) => {
                setBusiness(data.data);
                setName(data.data.name);
                setDescription(data.data.description);
                setPhotoPath(data.data.photoPath);
            })
            .catch((e) => {
                setErro(e);
                console.log("erro: ", e);
            });
    }, []);

    const handleChangeName = (e) => {
        setName(e.target.value);
        name.match(business.name)? setEdited(true) : setEdited(true)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
        setEdited(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdited(false);
        console.log({name, description, photoPath});
    }

    return (
        <div className="d-flex flex-column text-center gap-3">
            <PageTitle>Negócio</PageTitle>
            <div className="container text-start">
                <TextField
                    id="businessName"
                    label="Nome:"
                    type="text"
                    value={name && name}
                    onChange={handleChangeName}
                />
                <TextareaField
                    id="businessDescription"
                    label="Descrição:"
                    type="text"
                    value={description && description}
                    onChange={handleChangeDescription}
                />
                <div className="row mb-3">
                    <label className="form-label" htmlFor="businessLogo">Logo:</label>
                    <input type="file" id="businessLogo" />
                </div>
                <div className="row mb-3">
                    <div style={{ width: '250px', height: "250px", backgroundColor: "gray", borderRadius: '100%' }}>
                        <img id="previewLogo" className="rounded img-fluid" src="..." />
                    </div>
                </div>
            </div>
            <div className="flex-row d-flex justify-content-end">
                <button className={`btn btn-primary ${edited? 'visible' : 'invisible'}`}  onClick={handleSubmit}>Salvar</button>
            </div>
        </div>
    );
}

export default Business;

/**
 * 
 */