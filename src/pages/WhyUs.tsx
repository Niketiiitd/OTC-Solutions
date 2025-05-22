import ServiceCards from "@/components/services/ServiceCards";

export default function WhyUs() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-[400px] overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Why Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Why choose us
          </h1>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[oklch(0.623_0.214_259.815)] mb-4 text-center">
            Why OTC Solutions?
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            At OTC Solutions, we go beyond routine accounting. We are your strategic partners, committed to helping you grow, optimize, and future-proof your business. Our team combines deep industry expertise with a proactive approach, ensuring you receive not just compliance, but real value and peace of mind.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[oklch(0.623_0.214_259.815)/0.07] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-[oklch(0.623_0.214_259.815)]">What Makes Us Different?</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Proactive advice to improve your profits and business value</li>
              <li>Personalized support to help you achieve your business goals</li>
              <li>Innovative, tailored solutions for your unique requirements</li>
              <li>We give you more time to focus on running your business</li>
            </ul>
          </div>
          <div className="bg-[oklch(0.623_0.214_259.815)/0.07] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-[oklch(0.623_0.214_259.815)]">Our Commitment</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fresh, forward-thinking approach to accounts and tax planning</li>
              <li>Friendly, responsive, and personal service</li>
              <li>On-site visits at your convenience</li>
              <li>Continuous monitoring and business advisory for your growth</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2 text-[oklch(0.623_0.214_259.815)]">Does your current accountant...</h4>
          <ul className="list-disc pl-8 text-lg text-gray-700 space-y-1">
            <li>Help you identify opportunities to improve your profits?</li>
            <li>Work with you to achieve your business goals?</li>
            <li>Give you more time to run your business?</li>
          </ul>
        </div>
        <div className="text-lg text-gray-700 text-center">
          <p>
            <strong>OTC Solutions</strong> gives you peace of mind by looking after your routine financial and accounting operations—and so much more.
          </p>
          <p className="mt-4">
            We use our business advisory experience and expertise to monitor your business and provide proactive advice on how you can improve your bottom line and net worth.
          </p>
          <p className="mt-4">
            <span className="font-semibold">Contact us today</span> to discover how we can help you achieve your business ambitions.
          </p>
        </div>
      </div>
      {/* Services Card Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Explore Our Services
        </h2>
        <ServiceCards />
      </div>
    </div>
  );
}
