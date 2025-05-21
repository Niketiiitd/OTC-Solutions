import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export default function WhoAreWe() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto py-10 ">
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-left min-h-[60vh] mt-[15%] pl-2 md:pl-8">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[oklch(0.623_0.214_259.815)] mb-4 text-left leading-tight">
          WELCOME to OTC SOLUTIONS
        </h1>
        <div className="w-32 h-1 bg-[oklch(0.623_0.214_259.815)] rounded-full mb-4"></div>
        <h2 className="text-xl md:text-2xl font-semibold text-left mb-2 text-gray-800">
          Over-The-Counter Solutions
        </h2>
        <p className="text-lg text-left mb-8 text-gray-700 ">
          Your trusted reliable outsourced partner in accounting & financial business advisory.
        </p>
        <button
          className="mt-2 px-6 py-2 bg-[oklch(0.623_0.214_259.815)] text-white rounded-lg font-semibold shadow hover:bg-[oklch(0.623_0.214_259.815)/.85] transition-colors"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </button>
      </div>

      {/* Who Are We Section */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Content */}
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-[oklch(0.623_0.214_259.815)] mb-4">Who are we</h2>
          <div className="space-y-5 text-base text-gray-700">
            <p>
              OTC Solutions started in 2022 with vision to partnering with your business as back office over-the-counter finance & accounting Advisory solution so that our clients focus on strategic expansion of their business.
            </p>
            <p>
              The management team comprises of professionals with several years of experience in the area of accounting and auditing. OTC Solutions provide seamless cost effective & affordable supports in Accounts & Finance Controls.
            </p>
            <p>
              OTC Solutions positions itself as a start-up professional services firm that helps businesses transform their operations and achieve better business outcomes. OTC specialize in serving privately held businesses and high net-worth individuals and offer a wide range of services including audit and assurance, tax compliance and planning, business advisory, forensic accounting, and other compliances.
            </p>
            <p>
              Our goals are not only to simplify your company's accounting, payroll, and tax calculation requirements but also to reduce the costs you could encounter if you were to obtain these services locally or if you were to hire full-time bookkeepers and accountants for your company.
            </p>
            <p>
              We bring expertise and experience are completely familiar and experienced in using international accounting software from various jurisdictions e.g., Quick Books, Tally Prime, Navision, SAGE, XERO, Tally and SAP, etc. Our deep experience of both Finance & Accounting processes and specific industry knowledge, provide you with a more rounded and progressive partnership.
            </p>
            <p>
              With IT-enabled financial processes advancing and geographical constraints dissolving, OTC Solutions is helping to shape the accounting function of the businesses.
            </p>
            <p>
              We continuously improve the processes and apply quality practices to exceed client requirements resulting in customer satisfaction.
            </p>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[350px] flex justify-center">
          <img
            src="https://heroui.com/images/hero-card.jpeg"
            alt="OTC Solutions Team"
            className="rounded-xl shadow-lg object-cover w-[300px] h-[300px] md:w-[350px] md:h-[350px]"
          />
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-12 bg-[oklch(0.623_0.214_259.815)] opacity-40 mt-[10%]" />

      {/* How Can We Help You Section */}
      <div className="mt-12">
        <h2 className="text-base font-semibold  mb-2 text-left">
          HOW CAN WE HELP YOU
        </h2>
        <p className="text-6xl font-extrabold  text-[oklch(0.623_0.214_259.815)] mb-8 leading-tight">
          Looking for Premium Consulting Services for your business?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Cards */}
          {[
            {
              iconImg: "/icons/startup.svg",
              title: "For Start-Up & New Entity Registrations in India (New Bharat)",
              desc: "Get expert help for business establishment, government registrations, and accounting system integration for new entities in India.",
            },
            {
              iconImg: "/icons/bookkeeping.svg",
              title: "Expert Business Accounting Book Keeping",
              desc: "Professional bookkeeping and accounting services for regular management accounts, audit firms, payables, and receivables.",
            },
            {
              iconImg: "/icons/reporting.svg",
              title: "Management Reporting & Finance Control",
              desc: "Comprehensive financial reporting, controller services, business analytics, and working capital management.",
            },
            {
              iconImg: "/icons/tax.svg",
              title: "Tax Management",
              desc: "Annual financial statements, corporate tax returns, indirect tax, and withholding tax management.",
            },
            {
              iconImg: "/icons/hr.svg",
              title: "Payroll & HR related Services",
              desc: "Payroll processing, labour law compliance, talent search, recruitment, and complete talent acquisition services.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl p-6 bg-white h-full"
            >
              <div className="flex items-center mb-4">
                {/* Replace with your icon image */}
                <img src={service.iconImg} alt="" className="w-10 h-10 mr-3" />
                <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)]">{service.title}</h3>
              </div>
              <p className="text-base text-gray-700 flex-1 mb-4">{service.desc}</p>
              <button
                className="mt-auto px-4 py-2 bg-[oklch(0.623_0.214_259.815)] text-white rounded-lg font-semibold shadow hover:bg-[oklch(0.623_0.214_259.815)/.85] transition-colors w-fit"
                onClick={() => {}} // You can add navigation or modal here
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

