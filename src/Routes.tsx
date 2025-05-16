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
  return (
    <Routes>
      {/* Páginas principais */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />

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
