import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebLayout from './components/layouts/WebLayout';
import './index.css';

// Import new page components
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import Services from '@/pages/Services';
import WhoAreWe from '@/pages/WhoAreWe';
import WhyUs from '@/pages/WhyUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route path="who-are-we" element={<WhoAreWe />} />
          <Route path="about-us" element={<AboutUs />} />
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