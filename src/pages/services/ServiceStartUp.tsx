import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServiceStartUp() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Start-Up & New Entity Registrations Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Start-Up & New Entity Registration Services in India
          </h1>
        </div>
      </div>
       <div className="h-8 md:h-12"></div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full text-justify">
            
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Our Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">Business Establishment Registrations</span>
                  <span className="ml-2">– for New Entity in India with incorporation of entity on MCA portal for different category of Entities (Limited/Private Limited/One Person Companies, Limited Liabilities Partnership, Branch office, Liaison Office etc)</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Business Registrations on Various Governments Portals</span>
                  <span className="ml-2">– for New Entity in India, GST Registrations, Permanent Account Number (PAN No.), Tax Account Number (TAN No.), Import Export Code (IEC Code), Shop & Establishment Act Registrations & Trade License for Labour Law, Customs Licenses and other factories Licenses</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Accounting System Integrations</span>
                  <span className="ml-2">– Set up Accounting Systems for new start-ups and Customized report & System IT implementation readiness and MIS as per the need of the Business. Help to address their need and make our system robust according to client needs.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Extended Capabilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">Regulatory Compliance & Advisory</span>
                  <span className="ml-2">– We guide you through the complex regulatory landscape, ensuring your new business complies with all statutory requirements from day one. Our experts provide ongoing advisory for ROC filings, annual returns, and other compliance matters.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Business Planning & Consultation</span>
                  <span className="ml-2">– Receive expert advice on business structuring, funding options, and market entry strategies. We help you choose the right entity type and support you in drafting business plans and policies tailored to your vision.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Post-Incorporation Support</span>
                  <span className="ml-2">– Our services extend beyond registration. We assist with opening bank accounts, obtaining necessary licenses, and setting up operational processes so you can focus on growing your business.</span>
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
