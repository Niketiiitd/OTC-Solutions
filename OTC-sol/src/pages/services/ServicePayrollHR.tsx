import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function ServicePayrollHR() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Payroll & HR Services Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pt-10 flex">
        <h1 className="w-full text-4xl md:text-6xl font-extrabold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Payroll & HR Related Services
        </h1>
      </div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full">
            <p>
              <strong>Comprehensive Payroll & HR Solutions for Modern Businesses</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Payroll</strong> – We process payroll for all countries and in all major software platforms, ensuring compliance with tax formalities, IRS requirements, and social responsibility regulations.
              </li>
              <li>
                <strong>Labour Law Compliance</strong> – Expert management of EPF, ESIC, Labour Welfare Fund, and other statutory requirements to keep your business compliant and employees protected.
              </li>
              <li>
                <strong>Talent Search & Recruitment</strong> – Headhunting and assessment by our specialist team to find the right talent for your organization.
              </li>
              <li>
                <strong>TA Associate Services</strong> – Conducting telephonic interviews and assessments for middle & junior level positions to streamline your hiring process.
              </li>
              <li>
                <strong>Recruitment Process Outsourcing</strong> – End-to-end management of talent acquisition for projects, ensuring you have the right people at the right time.
              </li>
            </ul>
            {/* Extended content */}
            <p>
              <strong>Employee Onboarding & Documentation</strong> – We handle all onboarding formalities, documentation, and induction programs, ensuring a smooth transition for new hires.
            </p>
            <p>
              <strong>HR Policy Development & Advisory</strong> – Our experts help you design and implement HR policies, employee handbooks, and compliance frameworks tailored to your business needs.
            </p>
            <p>
              <strong>Attendance & Leave Management</strong> – Automated solutions for tracking attendance, managing leave requests, and integrating with payroll for seamless operations.
            </p>
            <p>
              <strong>Employee Engagement & Retention</strong> – We support your HR team with strategies for employee engagement, satisfaction surveys, and retention programs to build a motivated workforce.
            </p>
            <p>
              <strong>Confidentiality & Data Security</strong> – All payroll and HR data is managed with strict confidentiality and robust security protocols, ensuring your sensitive information is always protected.
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
