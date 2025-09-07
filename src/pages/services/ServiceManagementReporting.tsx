import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceManagementReporting() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Management Reporting & Finance Control Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Management Reporting & Finance Control
          </h1>
        </div>
      </div>
       <div className="h-8 md:h-12"></div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full text-justify">
            <p className="font-semibold text-[oklch(0.623_0.214_259.815)] text-xl">
              Empowering Your Business with Insightful Financial Reporting & Control
            </p>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Our Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">Monthly Financial Reporting</span>
                  <span className="ml-2">– Purchase Register, Sales Registers, Ageing Analysis AP/AR, COGS & Item-wise margin reports, Profit & Loss Statement with CM1, CM2 to analyse the monthly performance report of the business.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Controller Level Services</span>
                  <span className="ml-2">– Our experts function as accounting heads and oversee the preparation of financial statements. In addition to report preparation, our controller services also include monitoring internal controls, participating in the budgeting process, analysing financial data, and evaluating and selecting technology. We provide insights for strategic decision making through data interpretation to drive business success.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Business Analytics Solutions</span>
                  <span className="ml-2">– Operational Reporting, KPIs/KRAs Dashboard, Trend Analysis, COGS, CM1 & CM2. We deliver actionable analytics to help you monitor and improve business performance.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Working Capital Management</span>
                  <span className="ml-2">– We ensure a strong value proposition by identifying the main drivers affecting working capital and implementing strategic plans for sustainable results. Our mission is to manage your capital with greater precision and help you achieve your business goals.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Extended Capabilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">Custom Dashboard & Visualization</span>
                  <span className="ml-2">– We design and implement custom dashboards for real-time financial monitoring, enabling you to visualize trends and make informed decisions quickly.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Budgeting & Forecasting</span>
                  <span className="ml-2">– Our team assists in preparing budgets and forecasts, helping you plan for growth and manage resources efficiently.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Internal Controls & Compliance</span>
                  <span className="ml-2">– We establish robust internal controls and ensure compliance with statutory and regulatory requirements, reducing risk and enhancing transparency.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Confidentiality & Data Security</span>
                  <span className="ml-2">– Your financial data is handled with the utmost confidentiality and protected by advanced security protocols.</span>
                </li>
              </ul>
            </div>
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
