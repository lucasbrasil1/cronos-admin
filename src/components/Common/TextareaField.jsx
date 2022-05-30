export const TextareaField = ({ id, label, type, value, onChange }) => {
    return (
        <div className="row mb-3">
            <label className="form-label" htmlFor={id}>{label}</label>
            <textarea rows='5' className="form-control" type={type} id={id}
                value={value} onChange={onChange} />
        </div>
    );
}

export default TextareaField;