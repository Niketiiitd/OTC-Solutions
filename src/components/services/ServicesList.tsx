import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Add icon paths for each service
const services = [
  {
    iconImg: "/icons/startup.svg",
    title: "For Start-Up & New Entity Registrations in India (New Bharat)",
    path: "/services/start-up-new-entity-registrations",
    subtopics: [
      "Business Establishment Registrations",
      "Business Registrations on Various Governments Portals (GST, PAN, TAN, IEC, Shop & Establishment, Trade License, Customs, Factories, etc.)",
      "Accounting System Integrations & Customized Reporting",
    ]
  },
  {
    iconImg: "/icons/bookkeeping.svg",
    title: "Expert Business Accounting Book Keeping",
    path: "/services/business-accounting-book-keeping",
    subtopics: [
      "Accounting & Book Keeping Services",
      "Book Keeping for Audit Firms",
      "Payable Accounting",
      "Receivable Accounting",
    ]
  },
  {
    iconImg: "/icons/reporting.svg",
    title: "Management Reporting & Finance Control",
    path: "/services/management-reporting-finance-control",
    subtopics: [
      "Monthly Financial Reporting",
      "Controller Level Services",
      "Business Analytics Solutions",
      "Working Capital Management",
    ]
  },
  {
    iconImg: "/icons/tax.svg",
    title: "Tax Management",
    path: "/services/tax-management",
    subtopics: [
      "Annual Financial Statement",
      "Corporate Tax Returns",
      "Indirect Tax (VAT, GST, Sales Tax, etc.)",
      "Withholding Tax Management",
    ]
  },
  {
    iconImg: "/icons/hr.svg",
    title: "Payroll & HR related Services",
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
    iconImg: "/icons/india-entry.svg", // Use a suitable icon or placeholder
    title: "Entry Strategies for Foreign Companies in India",
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

export default function ServicesList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <p className="text-2xl font-semibold text-gray-700 border-b border-[oklch(0.623_0.214_259.815)] pb-2 w-full max-w-3xl text-center">
          Explore our detailed service offerings and discover how we can help your business grow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col rounded-xl p-6 bg-white h-full shadow transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.025]">
            <div className="flex items-center mb-4">
              <img src={service.iconImg} alt="" className="w-10 h-10 mr-3" />
              <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)]">
                {service.title}
              </h3>
            </div>
            <div className="flex-1">
              <ul className="list-disc pl-6 text-gray-700 text-lg space-y-1">
                {service.subtopics.map((sub, subIdx) => (
                  <li key={subIdx}>{sub}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[oklch(0.623_0.214_259.815)] text-white font-semibold shadow hover:bg-white hover:text-[oklch(0.623_0.214_259.815)] hover:border hover:border-[oklch(0.623_0.214_259.815)] transition-all"
                onClick={() => navigate(service.path)}
              >
                Know More <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
