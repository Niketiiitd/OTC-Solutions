import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceStartUp() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Start-Up & New Entity Registrations Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pt-10 flex">
        <h1 className="w-full text-4xl md:text-6xl font-extrabold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Start-Up & New Entity Registration Services in India
        </h1>
      </div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full">
            <p>
              <strong>Startup new entity registrations in India (New Bharat)</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Business Establishment Registrations</strong> – for New Entity in India with incorporation of entity on MCA portal for different category of Entities (Limited/Private Limited/One Person Companies, Limited Liabilities Partnership, Branch office, Liaison Office etc)
              </li>
              <li>
                <strong>Business Registrations on Various Governments Portals</strong> – for New Entity in India, GST Registrations, Permanent Account Number (PAN No.), Tax Account Number (TAN No.), Import Export Code (IEC Code), Shop & Establishment Act Registrations & Trade License for Labour Law, Customs Licenses and other factories Licenses
              </li>
              <li>
                <strong>Accounting System Integrations</strong> – Set up Accounting Systems for new start-ups and Customized report & System IT implementation readiness and MIS as per the need of the Business. Help to address their need and make our system robust according to client needs.
              </li>
            </ul>
            <p>
              <strong>Regulatory Compliance & Advisory</strong> – We guide you through the complex regulatory landscape, ensuring your new business complies with all statutory requirements from day one. Our experts provide ongoing advisory for ROC filings, annual returns, and other compliance matters.
            </p>
            <p>
              <strong>Business Planning & Consultation</strong> – Receive expert advice on business structuring, funding options, and market entry strategies. We help you choose the right entity type and support you in drafting business plans and policies tailored to your vision.
            </p>
            <p>
              <strong>Post-Incorporation Support</strong> – Our services extend beyond registration. We assist with opening bank accounts, obtaining necessary licenses, and setting up operational processes so you can focus on growing your business.
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
