import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";

export const Header = ({ pageTitle }) => {
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    return (
        <header className="bg-dark text-white">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>

                    <h1>{pageTitle}</h1>

                    <div className="flex-shrink-0 dropdown">
                        <a href="#" className="d-flex align-items-center p-3 link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><div className="dropdown-item" >Perfil</div></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><div onClick={handleLogout} className="dropdown-item" >Sair</div></li>
                        </ul>
                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header;