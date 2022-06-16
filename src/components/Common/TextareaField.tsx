import React from "react";
import { ITextArea } from "../../Interfaces";

export const TextareaField = ({ id, label, value, onChange } : ITextArea) => {
    return (
        <div className="my-2">
            <label className="form-label" htmlFor={id}>{label}</label>
            <textarea className="form-control" id={id}
                value={value} onChange={onChange} />
        </div>
    );
}

export default TextareaField;