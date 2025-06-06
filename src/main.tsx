// src/main.tsx or src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebLayout from './components/layouts/WebLayout';
import './index.css';

// Pages
import Team from '@/pages/about us/team';
import WhoAreWe from '@/pages/about us/whoAreWe';
import ContactUs from '@/pages/ContactUs';
import Services from '@/pages/Services';
import WhyUs from '@/pages/WhyUs';

// Service Pages
import ServiceBookKeeping from '@/pages/services/ServiceBookKeeping';
import ServiceManagementReporting from '@/pages/services/ServiceManagementReporting';
import ServicePayrollHR from '@/pages/services/ServicePayrollHR';
import ServiceStartUp from '@/pages/services/ServiceStartUp';
import ServiceTaxManagement from '@/pages/services/ServiceTaxManagement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<WhoAreWe />} />
        <Route path="about-us">
          <Route index element={<WhoAreWe />} />
          <Route path="team" element={<Team />} />
          <Route path="who-are-we" element={<WhoAreWe />} />
        </Route>
        <Route path="services">
          <Route index element={<Services />} />
          <Route path="start-up-new-entity-registrations" element={<ServiceStartUp />} />
          <Route path="business-accounting-book-keeping" element={<ServiceBookKeeping />} />
          <Route path="management-reporting-finance-control" element={<ServiceManagementReporting />} />
          <Route path="tax-management" element={<ServiceTaxManagement />} />
          <Route path="payroll-hr-services" element={<ServicePayrollHR />} />
        </Route>
        <Route path="why-us" element={<WhyUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
