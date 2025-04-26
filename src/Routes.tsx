import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Services';
import { WhoWeAre } from './pages/WhoWeAre';
import { Budget } from './pages/Budget';
import { Clients } from './pages/Clients';
import { Contact } from './pages/Contact';
import { ProjectConsultancy } from './pages/services/ProjectConsultancy';
import { SystemInstallation } from './pages/services/SystemInstallation';
import { MaintenanceTests } from './pages/services/MaintenanceTests';
import { Certification } from './pages/services/Certification';

export function AppRoutes() {
  return (
    <Routes>
      {/* Páginas principais */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<Contact />} />

      {/* Subpáginas de Serviços */}
      <Route path="/services/project-consultancy" element={<ProjectConsultancy />} />
      <Route path="/services/system-installation" element={<SystemInstallation />} />
      <Route path="/services/maintenance-tests" element={<MaintenanceTests />} />
      <Route path="/services/certification" element={<Certification />} />
    </Routes>
  );
}
