import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <div className="pt-16 md:pt-0">
      <div className="flex flex-col md:flex-row gap-8 mb-8 mx-4 md:mx-[15%] py-6 md:py-10 px-4">
        {/* Left: Address & Contact Info */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-7xl text-[oklch(0.623_0.214_259.815)] mb-6 text-left mt-8 md:mt-[30%]">Get in touch</h2>
          <div className="mb-4 text-lg text-gray-700 font-semibold">LEAVE US A MESSAGE</div>
          {/* Head Office */}
          <div className="mb-4">
            <div className="mb-2 text-xl font-bold text-gray-800">Head Office</div>
            <div className="mb-1 text-base text-gray-700">
              Office No. 620, 6th Floor, ILD Trade Centre<br />
              Sector-47, Sohna, Sohna Road<br />
              Gurgaon-122018 (Haryana) India
            </div>
            <div className="mb-1 text-base text-gray-700">
              <span className="font-semibold">E-Mail:</span>{" "}
              <a href="mailto:gngarg@otc-solutions.com" className="text-blue-600 hover:underline">
                gngarg@otc-solutions.com
              </a>
            </div>
            <div className="mb-1 text-base text-gray-700">
              <span className="font-semibold">Telephone:</span>{" "}
              <a href="tel:+917206246711" className="text-blue-600 hover:underline">
                +91 72062-46711
              </a>
              {", "}
              <a href="tel:+919811890980" className="text-blue-600 hover:underline">
                9811-890-980
              </a>
            </div>
          </div>
          {/* Branch Offices */}
          <div className="mb-4">
            <div className="mb-2 text-xl font-bold text-gray-800">Branch Office</div>
            <div className="mb-1 text-base text-gray-700">
              1. Unit No. UG-04, Tower-3, Panch Seel Hynish<br />
              Greater Noida West, Sector-01 Noida-201306
            </div>
            <div className="mb-1 text-base text-gray-700">
              2. Unit No. 463, Sun Square Tower, Riico Chowk<br />
              Bhiwadi-301019 (Rajasthan)
            </div>
          </div>
        </div>
        {/* Right: Google Map & Form */}
        <div className="flex-1 flex flex-col gap-8 border md:mt-[10%]">
          <form className="space-y-4 bg-white p-6 rounded-xl mt-4 md:mt-8">
            <h2 className="text-2xl font-semibold mb-2">Leave Us a Message</h2>
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name</label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="mobile">Mobile Number</label>
              <Input id="mobile" type="tel" placeholder="Your Mobile Number" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Message</label>
              <Textarea id="message" placeholder="Type your message here..." rows={4} />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
      <hr className="my-8" />
      <div className="w-full h-[300px] md:h-[400px] rounded-none md:rounded-xl overflow-hidden">
        <iframe
          title="OTC Solutions Gurugram Office"
          src="https://www.google.com/maps?q=ILD+Trade+Centre,+Sohna+Road,+Gurgaon,+Haryana,+India&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}