import { ITextField } from "../../Interfaces";

export const TextField = ({ id, label, value, onChange, size} : ITextField) => {
    return (
        <div className={`col-${size}`}>
            <label className="form-label" htmlFor={id}>{label}</label>
            <input className="form-control" type="text" id={id}
                value={value} onChange={onChange}/>
        </div>
    );
}

export default TextField;