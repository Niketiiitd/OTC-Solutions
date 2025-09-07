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
  },
  {
    label: "Entry Strategies for Foreign Companies in India",
    path: "/services/entry-strategies-foreign-companies",
    subtopics: [
      "Liaison, Branch & Project Office",
      "Wholly Owned Subsidiary (WOS)",
      "Joint Venture (JV) & LLP",
      "Franchising, Licensing, Distribution",
      "FDI Routes & Key Considerations"
    ]
  }
];

export default function Footer() {
  const navigate = useNavigate();
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 flex flex-col gap-12 text-white">
        {/* Mobile view: Logo at top */}
        <div className="flex justify-center md:hidden">
          <img
            src="/logo.png"
            alt="OTC Solutions Logo"
            className="w-48 h-auto mb-8"
          />
        </div>

        {/* Services Section - Responsive Grid */}
        <div>
          <h1 className="text-4xl md:text-5xl mb-8 text-center md:text-left">Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="mb-6">
                <button
                  className="text-base md:text-lg font-semibold hover:underline hover:text-[oklch(0.623_0.214_259.815)] transition-colors text-left"
                  onClick={() => navigate(service.path)}
                >
                  {service.label}
                </button>
                <ul className="pl-4 mt-1 space-y-1 list-disc">
                  {service.subtopics.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-sm md:text-base text-gray-200 hover:text-[oklch(0.623_0.214_259.815)] cursor-pointer transition-colors"
                    >
                      {sub.length > 40 ? sub.substring(0, 40) + '...' : sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Explore & Social Media - Responsive Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Explore More */}
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold mb-4 text-[oklch(0.623_0.214_259.815)] text-center md:text-left">Explore More</h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <button
                    className="text-base hover:underline hover:text-[oklch(0.623_0.214_259.815)] transition-colors"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Social - Desktop Only */}
          <div className="hidden md:flex flex-col items-end justify-between">
            <div className="mb-8 flex flex-col items-end">
              <img
                src="/logo.png"
                alt="OTC Solutions Logo"
                className="w-56 h-auto mb-6"
              />
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
          
          {/* Mobile Social Icons */}
          <div className="flex md:hidden justify-center gap-6 w-full">
            <a href="tel:+919876543210" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaPhoneAlt size={24} />
            </a>
            <a href="mailto:support@otcsolutions.com" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
              <FaTwitter size={24} />
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
