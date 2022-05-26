import {
    BrowserRouter as Routers,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import { useContext } from "react";

import LoginPage from "./pages/LoginPage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Layout from "./components/Layout";
import Professional from "./components/Professionals/Professional";
import NewProfessionalForm from "./components/Professionals/NewProfessionalForm";
import ProfessionalsList from "./components/Professionals/ProfessionalsList";
import Scheduler from "./components/Scheduler/Scheduler";
import Professionals from "./components/Professionals/Professionals";
import Work from "./components/Works/Work";
import NewWorkForm from "./components/Works/NewWorkForm";
import Works from "./components/Works/Works";
import WorksList from "./components/Works/WorksList";
import Business from "./components/Business/Business";

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return (
                <div className="loading">
                    Carregando...
                </div>
            );
        }

        if(!authenticated) {
            return <Navigate to="/login" />;
        }

        return children;
    }

    /** Deixar rota do layout privada ao ativar login 
     * <Route path="/" element={<Private><Layout/></Private>}></Route> */
    return (
        <Routers>
            <AuthProvider>
                <Routes>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="/" element={<Private><Layout/></Private>}>
                        <Route index element={<Scheduler/>}/>
                        <Route path="business" element={<Business/>}/>
                        <Route path="works" element={<Works />}>
                            <Route path=":workId" element={<Work/>} />
                            <Route path="new" element={<NewWorkForm />} />
                            <Route index element={<WorksList/>} />
                        </Route> 
                        <Route path="professionals" element={<Professionals/>}>
                            <Route path=":professionalId" element={<Professional/>} />
                            <Route path="new" element={<NewProfessionalForm/>} />
                            <Route index element={<ProfessionalsList/>} />
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </Routers>
    );
}

/**
 * <Route path="unities" element={<Unities />}></Route>
                        <Route path="appearance" element={<Appearance />}></Route>
 */

export default AppRoutes;

