import FormInput from "../components/FormInput";

export default function ContactSection() {
  return (
    <div id="contact" className="flex flex-col gap-y-8 px-4 py-12 w-full scroll-mt-16 items-center">
      <p className="text-center">Get in Touch</p>
      <h1 className="text-5xl md:text-7xl text-center">Talk to our <br /> <span className="text-blue-500">travel experts</span></h1>
      <p className="text-center md:max-w-1/3">Planning a trip? Tell us a little about your plans and one of our travel experts will get back with a custom itinerary and pricing within 24 hours.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 md:px-0 md:w-3/4">
        <FormInput
          label="Full name*"
          placeholder="John Doe"
          type="text"
          forId="name"
        />
        <FormInput
          label="Email*"
          placeholder="john@example.com"
          type="email"
          forId="email"
        />
        <FormInput
          label="Mobile number*"
          placeholder="+62 812 3456 7890"
          type="tel"
          forId="phone"
        />
        <FormInput
          label="Country of residence*"
          placeholder="Indonesia"
          type="text"
          forId="country"
        />
        <FormInput
          label="Preferred travel dates*"
          placeholder="e.g. 20 Dec 2025 - 25 Dec 2025"
          type="text"
          forId="date"
        />
        <FormInput
          label="Budget (per person)"
          placeholder="e.g. $5,000 - $10,000"
          type="text"
          forId="budget"
        />
        <p className="text-slate-400 text-xs md:text-sm md:col-span-2">We respect your privacy. Your details are used only to plan your trip and will not be shared. By submitting, you agree to receive emails/calls about your booking.</p>
      </div>
      <button className="text-white bg-blue-500 px-4 py-1 rounded-full cursor-pointer hover:bg-blue-400 duration-300 w-fit">Request a Quote</button>
    </div>
  )
}