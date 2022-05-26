export const TextField = ({ id, label, value, onChange }) => {
    return (
        <div className="row mb-3">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input className="form-control" type="text" id={id}
                value={value} onChange={onChange}/>
        </div>
    );
}