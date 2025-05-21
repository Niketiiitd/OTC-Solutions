import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Mockup data for services and subtopics
const services = [
  {
    title: "For Start-Up & New Entity Registrations in India (New Bharat)",
    subtopics: [
      "Business Establishment Registrations",
      "Business Registrations on Various Governments Portals- for New Entity in India, GST Registrations, Permanent Account Number (PAN No.) Tax Account Number (TAN No.)  Import Export Code (IEC Code) Shop & Establishment Act Registrations & Trade License for Labour Law, Customs Licenses and other factories Licenses",
      "Accounting System Integrations - Set up Accounting Systems for new start-ups and Customized report & System IT implementation readiness and MIS as per the need of the Business. Help to addresses their need and make our system robust according to client needs."
    ]
  },
  {
    title: "Expert Business Accounting Book Keeping",
    subtopics: [
      "Accounting & Book Keeping Services-Regular management accounts for your business. We serve bookkeeping services for different industries.",
      "Book Keeping for audit firms-We help CPA’s, audit firms and reducing costs by outsourcing recurring task to us.",
      "Payable Accounting- Manage your Payables on daily basis, cost-effectively with reduced invoice discrepancies and disputes.",
      "Receivable Accounting-Manage Invoicing, Collection Report & Credit Analysis."
    ]
  },
  {
    title: "Management Reporting & Finance Control",
    subtopics: [
      "Monthly Financial Reporting- Purchase Reister, Sales Registers, Ageing Analysis AP/AR, COGS & Item wise margin reports, Profit & Loss Statement with CM 1, CM2 to analyse the monthly performance report of the business.",
      "Controller Level Services-Our experts function as accounting heads and oversee the preparation of financial statements. In addition to report preparation, our controller services also include monitoring internal controls, participating in the budgeting process, analysing financial data, and evaluating and selecting technology. We give insights on strategic decision making through read the data and interpretation to move business successful",
      "Business Analytics Solutions- Operational Reporting, KPIs/KRAs Dashboard, Operational Reporting, Trend Analysis. COGS, CM1 & CM2.",
      "Working Capital Management- We bring to our clients ensures a strong value proposition and provide far-reaching benefits to our clients from identifying the main drivers affecting working capital to implementing a strategic plan for sustainable results. Our mission is to manage our client’s capital with greater precision and help them achieve their business goals."
    ]
  },
  {
    title: "Tax Management",
    subtopics: [
      "Annual Financial Statement- Financial Statement as per GAAP for Tax filling purpose & Stakeholders.",
      "Corporate Tax Returns- Preparation of Annual Corporate tax return for filling with revenue authorities.",
      "Indirect Tax- We do VAT, GST, Sales Tax etc reduce attribution errors and costs and ensure indirect taxes are handled correctly.",
      "With Holding Tax- With holding Tax Management & filling with revenue authorities."
    ]
  },
  {
    title: "Payroll & HR related Services",
    subtopics: [
      "Payroll- We do Payroll for all countries in all software and comply with all tax formalities of the IRS, social responsibilities compliance.",
      "Labour Law Compliance- Managing EPF, ESICS, Labour Welfare Fund.",
      "Talent Search & Recruitment- Headhunting Assessment by specialist team.",
      "TA Associate Services- Conduct telephonic interview and assessment, for middle & junior level positions.",
      "Recruitment Process- Outsourcing- Manage complete Talent Acquisition services for projects."
    ]
  }
];

const navItems = [
  { label: "About us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Why us", path: "/why-us" },
  { label: "Contact us", path: "/contact-us" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Find the selected index based on the current path
  const selectedIndex = navItems.findIndex(item =>
    location.pathname === item.path ||
    (item.label === "Services" && location.pathname.startsWith("/services"))
  );

  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  return (
    <>
      <div className="flex justify-center items-center  relative left-0 right-0 m-0 p-0 bg-white">
        <NavigationMenu className="">
          <NavigationMenuList className="flex justify-center items-center ">
            {navItems.map((item, idx) => {
              const isServices = item.label === "Services";
              const isAboutUs = item.label === "About us";
              // Mark as active if current path matches or is a subroute
              const isActive =
                location.pathname === item.path ||
                (isServices && location.pathname.startsWith("/services")) ||
                (isAboutUs && location.pathname.startsWith("/about-us"));
              const isHovered = hoverIndex === idx;

              // Only selected nav item is blue, others use default
              const navItemStyle = [
                "text-xl text-center relative bg-none border-none outline-none cursor-pointer px-6 py-2 font-sans transition-colors duration-200",
                isActive ? "text-[oklch(0.623_0.214_259.815)]" : "text-[oklch(0.141_0.005_285.823)]"
              ].join(" ");

              const underlineStyle = [
                "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 rounded transition-colors duration-200",
                isActive ? "bg-[oklch(0.623_0.214_259.815)] w-8" : "bg-transparent w-8"
              ].join(" ");

              if (isServices) {
                return (
                  <NavigationMenuItem
                    key={item.label}
                    onMouseEnter={() => setHoverIndex(idx)}
                    className="relative"
                  >
                    <NavigationMenuTrigger
                      className={navItemStyle}
                      onClick={() => navigate(item.path)}
                    >
                      {item.label}
                      <span className={underlineStyle}></span>
                    </NavigationMenuTrigger>
                    {isHovered && (
                      <div
                        className="fixed inset-0 flex flex-col items-center justify-start overflow-y-auto z-[2000]"
                        style={{ top: "64px", background: "rgba(255,255,255,0.95)" }}
                        onMouseEnter={() => setHoverIndex(idx)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        <div className="w-full max-w-7xl mx-auto px-8 py-12 bg-white shadow-lg rounded-lg border border-[oklch(0.92_0.004_286.32)] mt-4"
                          onMouseEnter={() => setHoverIndex(idx)}
                          onMouseLeave={() => setHoverIndex(null)}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                            {services.map((service, sidx) => (
                              <div key={service.title + sidx}>
                                <div
                                  className="font-bold text-lg cursor-pointer py-1 rounded text-left text-foreground bg-inherit transition-colors duration-200 group"
                                  tabIndex={0}
                                  onMouseOver={e => (e.currentTarget.classList.add("text-[oklch(0.623_0.214_259.815)]"))}
                                  onMouseOut={e => (e.currentTarget.classList.remove("text-[oklch(0.623_0.214_259.815)]"))}
                                >
                                  {service.title}
                                </div>
                                <ul className="pl-5 my-2 list-disc text-foreground font-sans">
                                  {service.subtopics.map((sub, subIdx) => {
                                    const heading = sub.split("-")[0].trim();
                                    return (
                                      <li
                                        key={subIdx}
                                        className="mb-1 font-normal text-base font-sans cursor-pointer transition-colors duration-200 hover:text-[oklch(0.623_0.214_259.815)]"
                                        tabIndex={0}
                                        onMouseOver={e => (e.currentTarget.classList.add("text-[oklch(0.623_0.214_259.815)]"))}
                                        onMouseOut={e => (e.currentTarget.classList.remove("text-[oklch(0.623_0.214_259.815)]"))}
                                      >
                                        {heading}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </NavigationMenuItem>
                );
              }
              if (isAboutUs) {
                return (
                  <NavigationMenuItem
                    key={item.label}
                    onMouseEnter={() => setHoverIndex(idx)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="relative"
                  >
                    <NavigationMenuTrigger
                      className={navItemStyle}
                      onClick={() => navigate(item.path)}
                    >
                      {item.label}
                      <span className={underlineStyle}></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[180px] w-max bg-white shadow-lg rounded-lg z-[1000] p-0"
                    >
                      <div className="flex flex-col gap-2 p-4">
                        <div
                          className="font-medium text-base cursor-pointer px-3 py-2 rounded text-foreground transition-colors duration-200 hover:text-primary"
                          tabIndex={0}
                          onClick={() => navigate("/about-us/team")}
                        >
                          Team
                        </div>
                        <div
                          className="font-medium text-base cursor-pointer px-3 py-2 rounded text-foreground transition-colors duration-200 hover:text-primary"
                          tabIndex={0}
                          onClick={() => navigate("/about-us/who-are-we")}
                        >
                          Who Are We
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem
                  key={item.label}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="relative"
                >
                  <NavigationMenuLink
                    className={navItemStyle}
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                    <span className={underlineStyle}></span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}