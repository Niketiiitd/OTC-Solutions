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
  { label: "Who are we", path: "/who-are-we" },
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
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        maxWidth: "100vw",
        position: "relative",
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        background: "#fff"
      }}>
        <NavigationMenu style={{ width: "100vw" }}>
          <NavigationMenuList style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw"
          }}>
            {navItems.map((item, idx) => {
              const isActive = selectedIndex === idx;
              const isHovered = hoverIndex === idx;
              const isServices = item.label === "Services";
              const navItemStyle: React.CSSProperties = {
                fontSize: "1.25rem",
                textAlign: "center",
                position: "relative",
                background: "none",
                border: "none",
                outline: "none",
                color: isActive || isHovered ? "var(--primary)" : "var(--foreground)",
                cursor: "pointer",
                padding: "0.5rem 1.5rem",
                fontFamily: "inherit",
                borderBottom: "none",
                transition: "color 0.2s"
              };
              const underlineStyle: React.CSSProperties = {
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 0,
                width: "24px",
                height: "2px",
                background: isActive ? "var(--primary)" : "transparent",
                borderRadius: "1px",
                transition: "background 0.2s"
              };
              if (isServices) {
                return (
                  <NavigationMenuItem
                    key={item.label}
                    onMouseEnter={() => setHoverIndex(idx)}
                    onMouseLeave={() => setHoverIndex(null)}
                    style={{ position: "relative" }}
                  >
                    <NavigationMenuTrigger
                      style={navItemStyle}
                      onClick={() => navigate(item.path)}
                    >
                      {item.label}
                      <span style={underlineStyle}></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div
                        style={{
                          width: "100vw",
                          left: 0,
                          right: 0,
                          position: "relative",
                          fontSize: "clamp(1rem, 2vw, 1.15rem)",
                          padding: "2rem 3vw",
                          background: "#fff",
                          boxSizing: "border-box"
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                            gap: "2rem",
                            width: "100%",
                          }}
                        >
                          {services.map((service, sidx) => (
                            <div key={service.title + sidx}>
                              <div
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "1.1rem",
                                  cursor: "pointer",
                                  padding: "0.3rem 0",
                                  borderRadius: "4px",
                                  textAlign: "left",
                                  color: "var(--foreground)",
                                  background: "inherit",
                                  transition: "color 0.2s"
                                }}
                                tabIndex={0}
                                onMouseOver={e => (e.currentTarget.style.color = "var(--primary)")}
                                onMouseOut={e => (e.currentTarget.style.color = "var(--foreground)")}
                              >
                                {service.title}
                              </div>
                              <ul style={{
                                paddingLeft: "1.2rem",
                                margin: "0.4rem 0",
                                listStyle: "disc",
                                color: "var(--foreground)",
                                fontFamily: "inherit",
                              }}>
                                {service.subtopics.map((sub, subIdx) => {
                                  const heading = sub.split("-")[0].trim();
                                  return (
                                    <li
                                      key={subIdx}
                                      style={{
                                        marginBottom: "0.3rem",
                                        color: "var(--foreground)",
                                        fontWeight: 400,
                                        fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                                        fontFamily: "inherit"
                                      }}
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
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem
                  key={item.label}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{ position: "relative" }}
                >
                  <NavigationMenuLink
                    style={navItemStyle}
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                    <span style={underlineStyle}></span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}

