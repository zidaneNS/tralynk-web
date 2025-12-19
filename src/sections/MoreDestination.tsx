import { FaChevronRight } from "react-icons/fa";
import { moreDestinations } from "../mockup/moreDestination";

export default function MoreDestination() {
  return (
    <div className="flex flex-col gap-y-8 items-center w-full px-4 py-12">
      <h1 className="text-5xl md:text-6xl text-center font-semibold">Explore Destination</h1>
      <p className="text-center md:max-w-1/3">Handpicked travel experiences designed to give you the best of every destination—at the best value.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full md:px-8">
        {moreDestinations.map((dest, idx) => (
          <div key={idx} className="rounded-xl w-full h-[75vh] bg-cover bg-center group" style={{ backgroundImage: `url(${dest.imgSrc})` }}>
            <div className="w-full flex flex-col gap-y-6 justify-end p-8 h-full bg-linear-to-t from-black/80 to-black/40 text-white rounded-xl">
              <p className="text-slate-300">{dest.totalTrips} Trips <br />Packages</p>
              <div className="flex justify-between items-center">
                <p className="text-4xl font-semibold">{dest.title}</p>
                <FaChevronRight className="cursor-pointer size-8 p-2 rounded-full bg-white text-black group-hover:bg-blue-500 duration-300 group-hover:text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}