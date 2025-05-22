import { useCallback } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "About us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Why us", path: "/why-us" },
  { label: "Contact us", path: "/contact-us" },
];

const services = [
  {
    label: "For Start-Up & New Entity Registrations in India (New Bharat)",
    path: "/services/start-up-new-entity-registrations",
    subtopics: [
      "Business Establishment Registrations",
      "Business Registrations on Various Governments Portals (GST, PAN, TAN, IEC, Shop & Establishment, Trade License, Customs, Factories, etc.)",
      "Accounting System Integrations & Customized Reporting",
    ]
  },
  {
    label: "Expert Business Accounting Book Keeping",
    path: "/services/business-accounting-book-keeping",
    subtopics: [
      "Accounting & Book Keeping Services",
      "Book Keeping for Audit Firms",
      "Payable Accounting",
      "Receivable Accounting",
    ]
  },
  {
    label: "Management Reporting & Finance Control",
    path: "/services/management-reporting-finance-control",
    subtopics: [
      "Monthly Financial Reporting",
      "Controller Level Services",
      "Business Analytics Solutions",
      "Working Capital Management",
    ]
  },
  {
    label: "Tax Management",
    path: "/services/tax-management",
    subtopics: [
      "Annual Financial Statement",
      "Corporate Tax Returns",
      "Indirect Tax (VAT, GST, Sales Tax, etc.)",
      "Withholding Tax Management",
    ]
  },
  {
    label: "Payroll & HR related Services",
    path: "/services/payroll-hr-services",
    subtopics: [
      "Payroll",
      "Labour Law Compliance",
      "Talent Search & Recruitment",
      "TA Associate Services",
      "Recruitment Process Outsourcing",
    ]
  }
];

function useScrollToTopOnNavigate() {
  const navigate = useNavigate();
  return useCallback(
    (path: string) => {
      navigate(path);
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
        }
      }, 0);
    },
    [navigate]
  );
}

export default function Footer() {
  const scrollNavigate = useScrollToTopOnNavigate();
  return (
    <footer className="relative w-full mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Footer Background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.25)" }}
        />
      </div>
      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12 text-white">
        {/* Services and Explore More */}
        <div className="flex-1 flex flex-col">
          {/* Services Row */}
          <h1 className="text-5xl mb-8 text-[oklch(0.623_0.214_259.815)]">Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {services.map((service, idx) => (
              <div key={idx}>
                <button
                  className="text-lg font-semibold hover:underline hover:text-[oklch(0.623_0.214_259.815)] transition-colors"
                  onClick={() => scrollNavigate(service.path)}
                >
                  {service.label}
                </button>
                <ul className="pl-6 mt-1 space-y-1 list-disc">
                  {service.subtopics.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-base text-gray-200 hover:text-[oklch(0.623_0.214_259.815)] cursor-pointer transition-colors"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Explore More Row */}
          
        </div>
        {/* Logo and Social */}
        <div className="flex flex-col items-end justify-between flex-shrink-0 w-full md:w-80">
          <div className="mb-8 flex flex-col items-end">
            <img
              src="/logo.png"
              alt="OTC Solutions Logo"
              className="w-56 h-auto mb-6"
              style={{ maxWidth: "320px" }}
            />
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mb-4 text-[oklch(0.623_0.214_259.815)]">Explore More</h3>
            <ul className="flex flex-wrap gap-8">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <button
                    className="text-lg hover:underline hover:text-[oklch(0.623_0.214_259.815)] transition-colors"
                    onClick={() => scrollNavigate(item.path)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaPhoneAlt size={28} />
            </a>
            <a href="mailto:support@otcsolutions.com" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="relative z-10 text-center text-gray-300 py-4 bg-black/40">
        © {new Date().getFullYear()} OTC Solutions. All rights reserved.
      </div>
    </footer>
  );
}
