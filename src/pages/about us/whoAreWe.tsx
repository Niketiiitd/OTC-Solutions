import ServiceCards from "@/components/services/ServiceCards";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export default function WhoAreWe() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto ">
      {/* Hero Section with Full-Width Background Image */}
      <div
        className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden rounded-none"
        style={{ marginTop: 0, paddingTop: 0 }}
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://images.unsplash.com/photo-1689338039987-8a2539194e27?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3VyZ2FvbnwwfHwwfHx8MA%3D%3D"
            alt="Welcome OTC Solutions Background"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.30)" }}
          />
        </div>
        <div
          className="relative z-10 flex flex-col mt-[10%] items-start justify-left min-h-[90vh] pt-0 pl-2 md:pl-8 py-12 max-w-6xl mx-auto"
          style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 64px)" }} // 64px for navbar height
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-[oklch(0.623_0.214_259.815)] mb-4 text-left leading-tight">
            WELCOME TO OTC FINANCIAL SERVICES
          </h1>
          <div className="w-32 h-1 bg-[oklch(0.623_0.214_259.815)] rounded-full mb-4"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-left mb-2 text-gray-100">
            Over-The-Counter Solutions
          </h2>
          <p className="text-lg text-left mb-8 text-gray-200 ">
            Your trusted reliable outsourced partner in accounting & financial business advisory.
          </p>
          <button
            className="mt-2 px-6 py-2 bg-[oklch(0.623_0.214_259.815)] text-white rounded-lg font-semibold shadow hover:bg-[oklch(0.623_0.214_259.815)/.85] transition-colors"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Who Are We Section */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Content */}
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-[oklch(0.623_0.214_259.815)] mb-4">Who are we</h2>
          <div className="space-y-5 text-base text-gray-700">
            <p>
              OTC Solutions started in 2012 with vision to partnering with your business as back office over-the-counter finance & accounting Advisory solution so that our clients focus on strategic expansion of their business.
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
      <div className="mt-20">
        <h2 className="text-base font-semibold  mb-2 text-left">
          HOW CAN WE HELP YOU
        </h2>
        <p className="text-6xl font-extrabold  text-[oklch(0.623_0.214_259.815)] mb-8 leading-tight">
          Looking for Premium Consulting Services for your business?
        </p>
        <ServiceCards />
      </div>

      {/* Separator */}
      <Separator className="mt-[15%] bg-[oklch(0.623_0.214_259.815)] opacity-40" />

      {/* Automated Review Mechanism Section */}
      <div className="mt-[10%]">
        <h2 className="text-6xl font-bold text-[oklch(0.623_0.214_259.815)] mb-4 text-left">
          AUTOMATED REVIEW MECHANISM OF ACCOUNTING
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Insight Review of accounting reports through automated defined mechanism of maker and checker concept at each stage of finance operations by our team of professional experts. For each Transaction, there must be at least two individuals necessary for its completion. While one individual may create a transaction, the other individual should be involved in confirmation/authorization of the same.
          <br /><br />
          It integrates the reports with accounting systems and these two-way cross verifications process helps drive business productivity by improving efficiencies in the accounting review process.
          <br /><br />
          Insight Review helps businesses improve overall operational efficiencies through its ease of use and robust bookkeeping capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              iconImg: "/icons/review.svg",
              title: "Accounting Review",
              desc: "Ensure speed accuracy and efficiency with our bookkeeping review module.",
            },
            {
              iconImg: "/icons/monthly.svg",
              title: "Monthly Review",
              desc: "Accurate monthly closure with common and GL checklists reconciliations and supporting documents.",
            },
            {
              iconImg: "/icons/analysis.svg",
              title: "Financial Analysis",
              desc: "Get accurate financial information for informed business decision making.",
            },
            {
              iconImg: "/icons/reporting.svg",
              title: "Reporting Module",
              desc: "Comprehensive reporting packets and analytics to strategically manage your financial review process.",
            },
            {
              iconImg: "/icons/quality.svg",
              title: "Quality Assurance",
              desc: "This overarching module ensures all the quality standards are followed throughout the entire process/application.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl p-6 bg-white h-full"
            >
              <div className="flex items-center mb-4">
                <img src={item.iconImg} alt="" className="w-10 h-10 mr-3" />
                <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)]">{item.title}</h3>
              </div>
              <p className="text-base text-gray-700 flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-12 bg-[oklch(0.623_0.214_259.815)] opacity-40" />

      {/* Final Call to Action */}
      <div className="mt-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-[oklch(0.623_0.214_259.815)] mb-4">
          How Can We Help You?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Connect with us, find an office closest to you or join OTC-Solutions
        </p>
        <button
          className="px-8 py-3 bg-[oklch(0.623_0.214_259.815)] text-white rounded-lg font-semibold shadow hover:bg-[oklch(0.623_0.214_259.815)/.85] transition-colors"
          onClick={() => navigate("/contact-us")}
        >
          Find Us
        </button>
      </div>
    </div>
  )
}

