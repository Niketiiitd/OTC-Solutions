import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceManagementReporting() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Management Reporting & Finance Control Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pt-10 flex">
        <h1 className="w-full text-4xl md:text-6xl font-extrabold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Management Reporting & Finance Control
        </h1>
      </div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full">
            <p>
              <strong>Empowering Your Business with Insightful Financial Reporting & Control</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Monthly Financial Reporting</strong> – Purchase Register, Sales Registers, Ageing Analysis AP/AR, COGS & Item-wise margin reports, Profit & Loss Statement with CM1, CM2 to analyse the monthly performance report of the business.
              </li>
              <li>
                <strong>Controller Level Services</strong> – Our experts function as accounting heads and oversee the preparation of financial statements. In addition to report preparation, our controller services also include monitoring internal controls, participating in the budgeting process, analysing financial data, and evaluating and selecting technology. We provide insights for strategic decision making through data interpretation to drive business success.
              </li>
              <li>
                <strong>Business Analytics Solutions</strong> – Operational Reporting, KPIs/KRAs Dashboard, Trend Analysis, COGS, CM1 & CM2. We deliver actionable analytics to help you monitor and improve business performance.
              </li>
              <li>
                <strong>Working Capital Management</strong> – We ensure a strong value proposition by identifying the main drivers affecting working capital and implementing strategic plans for sustainable results. Our mission is to manage your capital with greater precision and help you achieve your business goals.
              </li>
            </ul>
            {/* Extended content */}
            <p>
              <strong>Custom Dashboard & Visualization</strong> – We design and implement custom dashboards for real-time financial monitoring, enabling you to visualize trends and make informed decisions quickly.
            </p>
            <p>
              <strong>Budgeting & Forecasting</strong> – Our team assists in preparing budgets and forecasts, helping you plan for growth and manage resources efficiently.
            </p>
            <p>
              <strong>Internal Controls & Compliance</strong> – We establish robust internal controls and ensure compliance with statutory and regulatory requirements, reducing risk and enhancing transparency.
            </p>
            <p>
              <strong>Confidentiality & Data Security</strong> – Your financial data is handled with the utmost confidentiality and protected by advanced security protocols.
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-start">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <RequestQuoteForm />
          </div>
        </div>
      </div>
      {/* Explore Other Services Section */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10">
        <h2 className="mt-[10%] text-5xl mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Explore Other Services
        </h2>
        <ServiceCards />
      </div>
    </div>
  );
}
