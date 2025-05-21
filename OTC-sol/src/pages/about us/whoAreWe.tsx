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

      {/* Scrollable Content */}
      <div className="mt-12">
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Our Vision
          </h3>
          <p className="text-base text-gray-700">
            OTC Solutions started in 2022 with the vision to partner with your business as a back office over-the-counter finance & accounting advisory solution, so that our clients can focus on the strategic expansion of their business.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Our Team
          </h3>
          <p className="text-base text-gray-700">
            The management team comprises professionals with several years of experience in accounting and auditing. OTC Solutions provides seamless, cost-effective, and affordable support in Accounts & Finance Controls.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Who We Serve
          </h3>
          <p className="text-base text-gray-700">
            OTC Solutions positions itself as a start-up professional services firm that helps businesses transform their operations and achieve better business outcomes. We specialize in serving privately held businesses and high net-worth individuals, offering a wide range of services including audit and assurance, tax compliance and planning, business advisory, forensic accounting, and other compliances.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Our Goals
          </h3>
          <p className="text-base text-gray-700">
            Our goals are not only to simplify your company's accounting, payroll, and tax calculation requirements but also to reduce the costs you could encounter if you were to obtain these services locally or hire full-time bookkeepers and accountants for your company.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Our Expertise
          </h3>
          <p className="text-base text-gray-700">
            We bring expertise and experience, being completely familiar and experienced in using international accounting software from various jurisdictions such as QuickBooks, Tally Prime, Navision, SAGE, XERO, Tally, and SAP. Our deep experience in both Finance & Accounting processes and specific industry knowledge provides you with a more rounded and progressive partnership.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Shaping the Future
          </h3>
          <p className="text-base text-gray-700">
            With IT-enabled financial processes advancing and geographical constraints dissolving, OTC Solutions is helping to shape the accounting function of businesses.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-[oklch(0.623_0.214_259.815)] mb-2">
            Commitment to Quality
          </h3>
          <p className="text-base text-gray-700">
            We continuously improve our processes and apply quality practices to exceed client requirements, resulting in customer satisfaction.
          </p>
        </section>
      </div>
    </div>
  )
}

