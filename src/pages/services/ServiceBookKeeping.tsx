import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceBookKeeping() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Business Accounting Book Keeping Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Expert Business Accounting Book Keeping
          </h1>
        </div>
      </div>
      {/* Add spacing below the banner */}
      <div className="h-8 md:h-12"></div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full text-justify">
            <p className="font-semibold text-[oklch(0.623_0.214_259.815)] text-xl">
              Our goal is to offer valuable insights that improve your business’s
              objectives.
            </p>
            <p>
              We provide accurate financial solutions tailored to your requirements
              while aligning our services with your company’s unique goals.
            </p>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Our Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Accounting & Book Keeping Services
                  </span>
                  <span className="ml-2">
                    – Regular management accounts for your business. We serve
                    bookkeeping services for different industries.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Book Keeping for audit firms
                  </span>
                  <span className="ml-2">
                    – We help CPA’s, audit firms and reduce costs by outsourcing
                    recurring tasks to us.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Payable Accounting
                  </span>
                  <span className="ml-2">
                    – Manage your payables on a daily basis, cost-effectively with
                    reduced invoice discrepancies and disputes.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Receivable Accounting
                  </span>
                  <span className="ml-2">
                    – Manage invoicing, collection reports & credit analysis.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Extended Capabilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Financial Reporting & Analysis
                  </span>
                  <span className="ml-2">
                    – We deliver timely and accurate financial reports, helping you
                    make informed decisions and maintain compliance with statutory
                    requirements.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Process Automation & Technology Integration
                  </span>
                  <span className="ml-2">
                    – Our team leverages the latest accounting software and
                    automation tools to streamline your bookkeeping processes and
                    enhance efficiency.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Internal Controls & Audit Support
                  </span>
                  <span className="ml-2">
                    – We help establish robust internal controls and provide audit
                    support to ensure transparency and accuracy in your financial
                    records.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">
                    Confidentiality & Data Security
                  </span>
                  <span className="ml-2">
                    – Your financial data is managed with the highest level of
                    confidentiality and security, ensuring peace of mind for your
                    business.
                  </span>
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
        <h2 className="mt-[10%] text-5xl mb-8 text-center text-[oklch(0.623_0.214_259.815)] font-extrabold">
          Explore Other Services
        </h2>
        <ServiceCards />
      </div>
    </div>
  );
}
