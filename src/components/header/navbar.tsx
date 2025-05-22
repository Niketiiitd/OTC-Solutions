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

  // Add scroll state for navbar background
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Find the selected index based on the current path
  const selectedIndex = navItems.findIndex(item =>
    location.pathname === item.path ||
    (item.label === "Services" && location.pathname.startsWith("/services"))
  );

  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  return (
    <>
      <div
        className={[
          "flex justify-center items-center fixed left-0 right-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow"
            : "bg-transparent"
        ].join(" ")}
        style={{ minHeight: "64px" }}
      >
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
                      onClick={() => {
                        navigate(item.path);
                        setHoverIndex(null);
                      }}
                    >
                      {item.label}
                      <span className={underlineStyle}></span>
                    </NavigationMenuTrigger>
                    {isHovered && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-2 z-[2000] bg-white rounded-xl shadow-lg p-8 min-w-[800px] max-w-[1200px] border w-full"
                        onMouseEnter={() => setHoverIndex(idx)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                          {services.map((service, sidx) => {
                            // Map service index to correct route path
                            let servicePath = "";
                            switch (sidx) {
                              case 0:
                                servicePath = "/services/start-up-new-entity-registrations";
                                break;
                              case 1:
                                servicePath = "/services/business-accounting-book-keeping";
                                break;
                              case 2:
                                servicePath = "/services/management-reporting-finance-control";
                                break;
                              case 3:
                                servicePath = "/services/tax-management";
                                break;
                              case 4:
                                servicePath = "/services/payroll-hr-services";
                                break;
                              default:
                                servicePath = "/services";
                            }
                            const isSectionActive = location.pathname === servicePath;
                            return (
                              <div key={service.title + sidx}>
                                <div
                                  className={
                                    "font-bold text-lg cursor-pointer py-1 rounded text-left bg-inherit transition-colors duration-200 group " +
                                    (isSectionActive ? "text-[oklch(0.623_0.214_259.815)] border-b-2 border-[oklch(0.623_0.214_259.815)]" : "text-foreground")
                                  }
                                  tabIndex={0}
                                  onClick={() => {
                                    navigate(servicePath);
                                    setHoverIndex(null);
                                  }}
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
                                        // No navigation for subtopic, only highlight on hover
                                        onMouseOver={e => (e.currentTarget.classList.add("text-[oklch(0.623_0.214_259.815)]"))}
                                        onMouseOut={e => (e.currentTarget.classList.remove("text-[oklch(0.623_0.214_259.815)]"))}
                                      >
                                        {heading}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
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
                      onClick={() => {
                        navigate(item.path);
                        setHoverIndex(null);
                      }}
                    >
                      {item.label}
                      <span className={underlineStyle}></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="absolute left-1/2 -translate-x-1/2 min-w-[180px] w-max bg-white shadow-lg rounded-lg z-[1000] p-0"
                      style={{
                        background: "#fff",
                        backdropFilter: "none",
                        border: "none"
                      }}
                    >
                      <div className="mt-3 mb-3">
                        {[
                          { label: "Team", path: "/about-us/team" },
                          { label: "Who Are We", path: "/about-us/who-are-we" }
                        ].map((sub, subIdx) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <div
                              key={subIdx}
                              className={
                                "font-medium text-base cursor-pointer px-1 py-1 rounded transition-colors duration-200 hover:text-primary relative flex justify-center items-center " +
                                (isSubActive ? "text-[oklch(0.623_0.214_259.815)]" : "text-foreground")
                              }
                              tabIndex={0}
                              onClick={() => {
                                navigate(sub.path);
                                setHoverIndex(null);
                              }}
                            >
                              <span className="w-full text-center">{sub.label}</span>
                              <span
                                className={[
                                  "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 rounded transition-colors duration-200",
                                  isSubActive ? "bg-[oklch(0.623_0.214_259.815)] w-8" : "bg-transparent w-8"
                                ].join(" ")}
                              ></span>
                            </div>
                          );
                        })}
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