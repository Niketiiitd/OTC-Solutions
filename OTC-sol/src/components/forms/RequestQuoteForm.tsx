import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RequestQuoteForm() {
  return (
    <form className="space-y-4 bg-white p-6 rounded-xl shadow border">
      <h2 className="text-2xl font-semibold mb-2">Request for Quote</h2>
      <div className="text-sm text-gray-500 mb-4">Fields marked with an <span className="text-red-500">*</span> are required</div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="service">
          What service may we assist you with? <span className="text-red-500">*</span>
        </label>
        <Input id="service" placeholder="Type or select a service" required />
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="description">
          Describe your request
        </label>
        <Textarea id="description" placeholder="Describe your requirements..." rows={4} />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium" htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input id="firstName" placeholder="First Name" required />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium" htmlFor="lastName">
            Last Name
          </label>
          <Input id="lastName" placeholder="Last Name" />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="phone">
          Phone <span className="text-red-500">*</span>
        </label>
        <Input id="phone" type="tel" placeholder="Your Phone Number" required />
      </div>
      <Button type="submit" className="w-full">Submit Request</Button>
    </form>
  );
}
