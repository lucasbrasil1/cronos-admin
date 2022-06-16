import React, {useState} from 'react';
import TextField from "../Common/TextField"

export const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {

    }

    const handleEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return (
        <div className="d-flex flex-column gap-3">
            <form className="form" onSubmit={handleSubmit}>
                <div className="row my-1">
                    <TextField
                        id="email"
                        label="Email:"
                        size="12"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button type="submit" className='btn btn-primary'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
