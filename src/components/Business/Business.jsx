const Business = () => {
    return (
        <div>
            <div className="d-flex flex-column text-center gap-3">
                <h1 className="mt-2">Negócio</h1>
                <div className="container text-start">
                    <div className="row mb-3">
                        <label className="form-label" htmlFor="businessName">Nome:</label>
                        <input className="form-control" type="text" id="businessName" />
                    </div>
                    <div className="row mb-3">
                        <label className="form-label" htmlFor="businessDescription">Descrição:</label>
                        <textarea rows={5} className="form-control" type="text" id="businessDescription" />
                    </div>
                    <div className="row mb-3">
                        <label className="form-label" htmlFor="businessLogo">Logo:</label>
                        <input className="invisible" type="file" id="businessLogo" />
                    </div>
                    <div className="row mb-3">
                        <div style={{ width: '250px', height: "250px", backgroundColor: "gray", borderRadius: '100%' }}>
                            <img id="previewLogo" className="rounded img-fluid" src="..." />
                        </div>
                    </div>
                    <div className="flex-row d-flex justify-content-end">
                        <button className="btn invisible btn-primary">Salvar</button>
                        <button className="btn btn-secondary">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;

/**
 * 
 */