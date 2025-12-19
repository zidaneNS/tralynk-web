import { FaCheck } from "react-icons/fa";
import { packages } from "../mockup/package";
import currency from "../helpers/currency";
import { LuPhone } from "react-icons/lu";

export default function PackageSection() {
  return (
    <div id="packages" className="flex flex-col items-center px-4 md:px-12 py-12 gap-y-12 scroll-mt-16 w-full">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold">Popular <span className="text-blue-500">packages</span></h1>
        <p className="text-center md:max-w-2/3">Handpicked travel experiences designed to give you the best of every destination—at the best value.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="flex flex-col shadow-md w-full rounded-md">
            <img src={pkg.imgSrc} alt="img" className="w-full aspect-video object-cover object-center rounded-t-md" />
            <div className="flex flex-col p-6 md:p-8 gap-y-6">
              <p className="text-slate-500">{pkg.duration.days} Days / {pkg.duration.nights} Nights</p>
              <p className="text-2xl">{pkg.title}</p>
              <div className="flex flex-col gap-y-4">
                {pkg.facilities.map((facility, facilityId) => (
                  <div key={facilityId} className="flex gap-x-4 items-center">
                    <FaCheck className="size-5 text-blue-500" />
                    <p className="text-sm md:text-base">{facility}</p>
                  </div>
                ))}
              </div>
              <span className="border-b border-slate-200 w-full"></span>
              <div className="flex gap-x-6 items-center">
                <p className="text-2xl font-semibold">${currency(pkg.price)}</p>
                <p className="text-sm md:text-base text-slate-500">Starting a - <br /> person</p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <button onClick={() => window.location.replace('#contact')} className="bg-blue-500 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-blue-400 duration-300 text-sm w-full md:w-fit flex-1">Get enquiry</button>
                <div className="flex gap-x-2 items-center">
                  <div className="flex justify-center items-center text-black rounded-full border border-black p-2">
                    <LuPhone className="size-4 md:size-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs md:text-sm">Contact anytime</p>
                    <p className="text-xs md:text-sm">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}