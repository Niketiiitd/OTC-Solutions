import ServicesList from "@/components/services/ServicesList";

export default function Services() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-[400px] overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </div>
      {/* Intro */}
      
      {/* Service Cards List */}
      
      {/* Detailed Subservices List */}
      <div className="max-w-7xl mx-auto px-4 pb-16 mt-[3%]">
        <ServicesList />
      </div>
    </div>
  );
}
