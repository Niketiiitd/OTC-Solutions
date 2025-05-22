import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceBookKeeping() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Business Accounting Book Keeping Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pt-10 flex">
        <h1 className="w-full text-4xl md:text-6xl font-extrabold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Expert Business Accounting Book Keeping
        </h1>
      </div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full">
            <p>
              <strong>Our goal is to offer valuable insights that improve your business’s objectives.</strong> We provide accurate financial solutions tailored to your requirements while aligning our services with your company’s unique goals.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Accounting & Book Keeping Services</strong> – Regular management accounts for your business. We serve bookkeeping services for different industries.
              </li>
              <li>
                <strong>Book Keeping for audit firms</strong> – We help CPA’s, audit firms and reduce costs by outsourcing recurring tasks to us.
              </li>
              <li>
                <strong>Payable Accounting</strong> – Manage your payables on a daily basis, cost-effectively with reduced invoice discrepancies and disputes.
              </li>
              <li>
                <strong>Receivable Accounting</strong> – Manage invoicing, collection reports & credit analysis.
              </li>
            </ul>
            {/* Extended content */}
            <p>
              <strong>Financial Reporting & Analysis</strong> – We deliver timely and accurate financial reports, helping you make informed decisions and maintain compliance with statutory requirements.
            </p>
            <p>
              <strong>Process Automation & Technology Integration</strong> – Our team leverages the latest accounting software and automation tools to streamline your bookkeeping processes and enhance efficiency.
            </p>
            <p>
              <strong>Internal Controls & Audit Support</strong> – We help establish robust internal controls and provide audit support to ensure transparency and accuracy in your financial records.
            </p>
            <p>
              <strong>Confidentiality & Data Security</strong> – Your financial data is managed with the highest level of confidentiality and security, ensuring peace of mind for your business.
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
