import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceTaxManagement() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Tax Management Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Tax Management
          </h1>
        </div>
      </div>
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pt-10 flex">
        <h1 className="w-full text-4xl md:text-6xl font-extrabold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Tax Management
        </h1>
      </div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full">
            <p>
              <strong>Comprehensive Tax Management Solutions for Your Business</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Annual Financial Statement</strong> – Financial Statement as per GAAP for tax filing purposes & stakeholders.
              </li>
              <li>
                <strong>Corporate Tax Returns</strong> – Preparation of annual corporate tax returns for filing with revenue authorities.
              </li>
              <li>
                <strong>Indirect Tax</strong> – We handle VAT, GST, Sales Tax, etc., to reduce attribution errors and costs, ensuring indirect taxes are managed correctly.
              </li>
              <li>
                <strong>Withholding Tax</strong> – Withholding tax management & filing with revenue authorities.
              </li>
            </ul>
            {/* Extended content */}
            <p>
              <strong>Tax Planning & Advisory</strong> – Our experts provide strategic tax planning to optimize your tax position and ensure compliance with ever-changing regulations.
            </p>
            <p>
              <strong>Representation & Litigation Support</strong> – We represent clients before tax authorities and provide support during audits, assessments, and litigation.
            </p>
            <p>
              <strong>International Taxation</strong> – Guidance on cross-border transactions, transfer pricing, and double taxation avoidance agreements (DTAA).
            </p>
            <p>
              <strong>Confidentiality & Data Security</strong> – All tax data is managed with strict confidentiality and robust security protocols, ensuring your sensitive information is always protected.
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
