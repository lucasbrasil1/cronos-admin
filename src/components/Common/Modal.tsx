import React from "react";

interface IModal {
    id: string;
    title: string;
    body: string;
    buttonText: string;
    buttonColor: string;
}

export const Modal = ({id, title, body, buttonText, buttonColor} : IModal) => {
    return (
        <div className="modal fade" id={id} tabIndex={-1} aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={`btn btn-${buttonColor}`} data-bs-dismiss="modal"> {buttonText} </button>
                    </div>
                </div>
            </div>
        </div>
    );
}