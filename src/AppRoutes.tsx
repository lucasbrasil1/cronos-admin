import {
    BrowserRouter as Routers,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import React, { FC, useContext } from "react";

import { AuthProvider, AuthContext } from "./contexts/auth";
import Layout from "./components/Layout";
import Professional from "./components/Professionals/Professional";
import NewProfessionalForm from "./components/Professionals/NewProfessionalForm";
import ProfessionalsList from "./components/Professionals/ProfessionalsList";
import Scheduler from "./components/Scheduler/Scheduler";
import Professionals from "./components/Professionals/Professionals";
import Business from "./components/Business/Business";
import BusinessForm from "./components/Business/BusinessForm";
import Units from "./components/Units/Units";
import Unit from "./components/Units/Unit";
import NewUnitForm from "./components/Units/NewUnitForm";
import UnitsList from "./components/Units/UnitsList";
import { Appearance } from "./components/Appearance/Appearance";
import Works from "./components/Works/Works";
import Work from "./components/Works/Work";
import NewWorkForm from "./components/Works/NewWorkForm";
import WorksList from "./components/Works/WorksList";
import { BusinessProvider } from "./contexts/BusinessContext";
import { SchedulerContextProvider } from "./contexts/SchedulerContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import Login from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";

interface IAppRoutes {
    children : JSX.Element
}

const AppRoutes:FC = () => {
    const Private = ({ children } : IAppRoutes ) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return (
                <div className="loading">
                    Carregando...
                </div>
            );
        }

        if (!authenticated) {
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
                    <Route path="login" element={<Login />} />
                    <Route path="forgotPassword" element={<ForgotPassword />} />
                    <Route path="/" element={
                        <Private>
                            <BusinessProvider>
                                <LayoutProvider>
                                    <Layout />
                                </LayoutProvider>
                            </BusinessProvider>
                        </Private>
                    }>
                        <Route index element={
                            <SchedulerContextProvider>
                                <Scheduler />
                            </SchedulerContextProvider>
                        } />
                        <Route path="business" element={<Business />} >
                            <Route path="new" element={<BusinessForm />} />
                        </Route>
                        <Route path="works" element={<Works />}>
                            <Route path=":workId" element={<Work />} />
                            <Route path="new" element={<NewWorkForm />} />
                            <Route index element={<WorksList />} />
                        </Route>
                        <Route path="professionals" element={<Professionals />}>
                            <Route path=":professionalId" element={<Professional />} />
                            <Route path="new" element={<NewProfessionalForm />} />
                            <Route index element={<ProfessionalsList />} />
                        </Route>
                        <Route path="units" element={<Units />}>
                            <Route path=":unitId" element={<Unit />} />
                            <Route path="new" element={<NewUnitForm />} />
                            <Route index element={<UnitsList />} />
                        </Route>
                        <Route path="appearance" element={<Appearance />} />
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

