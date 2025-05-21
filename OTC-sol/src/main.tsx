import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebLayout from './components/layouts/WebLayout';
import './index.css';

// Import new page components

import Team from '@/pages/about us/team';
import WhoAreWe from '@/pages/about us/whoAreWe';
import ContactUs from '@/pages/ContactUs';
import Services from '@/pages/Services';
import WhyUs from '@/pages/WhyUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route path="about-us">
            <Route index element={<WhoAreWe />} />
            <Route path="team" element={<Team />} />
            <Route path="who-are-we" element={<WhoAreWe />} />
          </Route>
          <Route path="services" element={<Services />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);