import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServicePayrollHR() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Payroll & HR Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Payroll & HR Related Services
          </h1>
        </div>
      </div>
      <div className="h-8 md:h-12"></div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full text-justify">
            <p className="font-semibold text-[oklch(0.623_0.214_259.815)] text-xl">
              Comprehensive Payroll & HR Solutions for Modern Businesses
            </p>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Our Services
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">Payroll</span>
                  <span className="ml-2">– We process payroll for all countries and in all major software platforms, ensuring compliance with tax formalities, IRS requirements, and social responsibility regulations.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Labour Law Compliance</span>
                  <span className="ml-2">– Expert management of EPF, ESIC, Labour Welfare Fund, and other statutory requirements to keep your business compliant and employees protected.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Talent Search & Recruitment</span>
                  <span className="ml-2">– Headhunting and assessment by our specialist team to find the right talent for your organization.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">TA Associate Services</span>
                  <span className="ml-2">– Conducting telephonic interviews and assessments for middle & junior level positions to streamline your hiring process.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Recruitment Process Outsourcing</span>
                  <span className="ml-2">– End-to-end management of talent acquisition for projects, ensuring you have the right people at the right time.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-[oklch(0.623_0.214_259.815)] mb-2">
                Extended Capabilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-lg text-gray-900">Employee Onboarding & Documentation</span>
                  <span className="ml-2">– We handle all onboarding formalities, documentation, and induction programs, ensuring a smooth transition for new hires.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">HR Policy Development & Advisory</span>
                  <span className="ml-2">– Our experts help you design and implement HR policies, employee handbooks, and compliance frameworks tailored to your business needs.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Attendance & Leave Management</span>
                  <span className="ml-2">– Automated solutions for tracking attendance, managing leave requests, and integrating with payroll for seamless operations.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Employee Engagement & Retention</span>
                  <span className="ml-2">– We support your HR team with strategies for employee engagement, satisfaction surveys, and retention programs to build a motivated workforce.</span>
                </li>
                <li>
                  <span className="font-semibold text-lg text-gray-900">Confidentiality & Data Security</span>
                  <span className="ml-2">– All payroll and HR data is managed with strict confidentiality and robust security protocols, ensuring your sensitive information is always protected.</span>
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
