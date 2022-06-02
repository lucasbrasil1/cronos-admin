import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth";
import { api } from "../../../services/api";

const NewWorkForm = () => {
    const { businessId } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [modal, setModal] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let hourMinute = time.split(":");
        api.post("/works", {
            businessId: businessId,
            name: name,
            description: description,
            hour: hourMinute[0],
            minute: hourMinute[1],
            price: price
        })
            .catch()
            .finally();
    }

    const handleSelectChange = (e) => {
        setTime(e);
    }

    const handleModal = () => {
        setModal(!!modal);
    }

    return (
        <div className="d-flex flex-column gap-3">
            <h1 className="mt-2 text-center">Adicionar Serviço</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="work-name" className="form-label">Nome</label>
                    <input type="text"
                        className="form-control"
                        id="work-name"
                        aria-describedby="nome-do-servico"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="work-value" className="form-label">Valor</label>
                    <input type="number"
                        className="form-control"
                        id="work-value"
                        aria-describedby="valor-do-servico"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="work-time" className="form-label">Tempo</label>
                    <select
                        id="work-time"
                        className="form-select form-select-sm"
                        aria-label="Selecione quanto tempo em média é realizado o serviço"
                        value={time}
                        onChange={(e) => handleSelectChange(e.target.value)}
                    >
                        <option defaultValue="00:00">--:--</option>
                        <option value="00:15">00:15</option>
                        <option value="00:30">00:30</option>
                        <option value="00:45">00:45</option>
                        <option value="01:00">01:00</option>
                        <option value="01:30">01:30</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="work-description" className="form-label">Descrição</label>
                    <textarea rows="5" type="text" className="form-control" id="work-description" aria-describedby="descricao-do-servico"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={handleModal} >
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewWorkForm;