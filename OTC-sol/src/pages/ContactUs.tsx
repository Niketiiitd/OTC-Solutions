import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div className="mx-[15%] py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Left: Address & Contact Info */}
        <div className="flex-1">
          <h2 className="text-7xl text-[oklch(0.623_0.214_259.815)] mb-6 text-left mt-[30%]">Get in touch</h2>
          <div className="mb-4 text-lg text-gray-700 font-semibold">LEAVE US A MESSAGE</div>
          <div className="mb-2 text-base text-gray-700">
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+919876543210" className="text-blue-600 hover:underline">
              +91 9876543210
            </a>
          </div>
          <div className="mb-2 text-base text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:support@otcsolutions.com" className="text-blue-600 hover:underline">
              support@otcsolutions.com
            </a>
          </div>
          <div className="mb-2 text-base text-gray-700">
            <span className="font-semibold">Address:</span>{" "}
            Gurugram Haryana India
          </div>
        </div>
        {/* Right: Google Map */}
        <div className="flex-1 flex flex-col gap-8 border">
          <form className="space-y-4 bg-white p-6 rounded-xl mt-8">
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
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              title="OTC Solutions Gurugram Office"
              src="https://www.google.com/maps?q=Gurugram,+Haryana,+India&output=embed"
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