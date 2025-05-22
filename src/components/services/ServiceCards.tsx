const services = [
  {
    iconImg: "/icons/startup.svg",
    title: "For Start-Up & New Entity Registrations in India (New Bharat)",
    desc: "Get expert help for business establishment, government registrations, and accounting system integration for new entities in India.",
    path: "/services/start-up-new-entity-registrations",
  },
  {
    iconImg: "/icons/bookkeeping.svg",
    title: "Expert Business Accounting Book Keeping",
    desc: "Professional bookkeeping and accounting services for regular management accounts, audit firms, payables, and receivables.",
    path: "/services/business-accounting-book-keeping",
  },
  {
    iconImg: "/icons/reporting.svg",
    title: "Management Reporting & Finance Control",
    desc: "Comprehensive financial reporting, controller services, business analytics, and working capital management.",
    path: "/services/management-reporting-finance-control",
  },
  {
    iconImg: "/icons/tax.svg",
    title: "Tax Management",
    desc: "Annual financial statements, corporate tax returns, indirect tax, and withholding tax management.",
    path: "/services/tax-management",
  },
  {
    iconImg: "/icons/hr.svg",
    title: "Payroll & HR related Services",
    desc: "Payroll processing, labour law compliance, talent search, recruitment, and complete talent acquisition services.",
    path: "/services/payroll-hr-services",
  },
];

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

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

export default function ServiceCards() {
  const scrollNavigate = useScrollToTopOnNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="flex flex-col rounded-xl p-6 bg-white h-full transition-transform duration-200 shadow hover:shadow-xl hover:-translate-y-1 hover:scale-[1.025] cursor-pointer group"
          onClick={() => scrollNavigate(service.path)}
        >
          <div className="flex items-center mb-4">
            <img src={service.iconImg} alt="" className="w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] group-hover:underline group-hover:text-[oklch(0.623_0.214_259.815)] transition-colors duration-200">
              {service.title}
            </h3>
          </div>
          <p className="text-base text-gray-700 flex-1 mb-4 group-hover:text-[oklch(0.623_0.214_259.815)] transition-colors duration-200">
            {service.desc}
          </p>
          <button
            className="mt-auto px-4 py-2 bg-[oklch(0.623_0.214_259.815)] text-white rounded-lg font-semibold shadow transition-all w-fit group-hover:scale-105 group-hover:bg-white group-hover:text-[oklch(0.623_0.214_259.815)] group-hover:border group-hover:border-[oklch(0.623_0.214_259.815)] group-hover:shadow-lg"
            onClick={e => {
              e.stopPropagation();
              scrollNavigate(service.path);
            }}
          >
            View More
          </button>
        </div>
      ))}
    </div>
  );
}
