import React, { FC, FormEventHandler, useContext, useState, SetStateAction } from 'react';
import { AuthContext } from '../../contexts/auth';
export const Login = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>();

    const handleEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) };
    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        login(email, password);
    };

    return (
        <div id="login" className="container text-center">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );

}

export default Login;
