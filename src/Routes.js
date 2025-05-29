import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Service/Services';
import { WhoWeAre } from './pages/WhoWeAre';
import { Clients } from './pages/Clients';
import { Contact } from './pages/Contact';
import { ProjectConsultancy } from './pages/Service/ProjectConsultancy';
import { SystemInstallation } from './pages/Service/SystemInstallation';
import { MaintenanceTests } from './pages/Service/MaintenanceTests';
import { Certification } from './pages/Service/Certification';
export function AppRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/who-we-are", element: _jsx(WhoWeAre, {}) }), _jsx(Route, { path: "/clients", element: _jsx(Clients, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/services/project-consultancy", element: _jsx(ProjectConsultancy, {}) }), _jsx(Route, { path: "/services/system-installation", element: _jsx(SystemInstallation, {}) }), _jsx(Route, { path: "/services/maintenance-tests", element: _jsx(MaintenanceTests, {}) }), _jsx(Route, { path: "/services/certification", element: _jsx(Certification, {}) })] }));
}
