import {
    BrowserRouter as Routers,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import React, { useContext } from "react";

import LoginPage from "./pages/LoginPage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Layout from "./components/Layout";
import Professional from "./components/Modules/Professionals/Professional";
import NewProfessionalForm from "./components/Modules/Professionals/NewProfessionalForm";
import ProfessionalsList from "./components/Modules/Professionals/ProfessionalsList";
import Scheduler from "./components/Modules/Scheduler/Scheduler";
import Professionals from "./components/Modules/Professionals/Professionals";
import Business from "./components/Modules/Business/Business";
import BusinessForm from "./components/Modules/Business/BusinessForm";
import Units from "./components/Modules/Units/Units";
import Unit from "./components/Modules/Units/Unit";
import NewUnitForm from "./components/Modules/Units/NewUnitForm";
import UnitsList from "./components/Modules/Units/UnitsList";
import { Appearance } from "./components/Modules/Appearance/Appearance";
import Works from "./components/Modules/Works/Works";
import Work from "./components/Modules/Works/Work";
import NewWorkForm from "./components/Modules/Works/NewWorkForm";
import WorksList from "./components/Modules/Works/WorksList";
import { BusinessProvider } from "./contexts/BusinessContext";
import { ActiveDays } from "./components/Modules/Units/ActiveDays";
import { SchedulerContextProvider } from "./contexts/SchedulerContext";
import { LayoutProvider } from "./contexts/LayoutContext";

const AppRoutes = () => {
    const Private = ({ children }) => {
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
                    <Route path="login" element={<LoginPage />} />
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

