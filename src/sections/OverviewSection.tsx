import { FaCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import vertical from "../assets/images/img-vertical.jpg";
import horizontal from "../assets/images/img-horizontal.jpg";
import horizontal2 from "../assets/images/img-horizontal2.jpg";

interface Information {
  total: number;
  desc: string;
}

const informations: Information[] = [
  {
    total: 12,
    desc: 'Happy travelers'
  },
  {
    total: 10,
    desc: 'Flights booked'
  },
  {
    total: 5,
    desc: 'Tours organized'
  },
  {
    total: 8,
    desc: 'Hotel stays'
  },
];

const offers = [
  'Premium Stays & Exclusive Deals',
  'Tailored Packages for Every Traveler',
  'Unmatched Support Before & During Trips'
];

export default function OverviewSection() {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-20 px-6 md:px-16 py-8 md:py-8 w-full">
      <div className="flex flex-col md:flex-row w-full gap-y-8 md:gap-x-12 md:gap-y-0">
        <div className="flex flex-col justify-between flex-1 md:py-12 gap-y-4 md:gap-y-0">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <div className="flex gap-x-2 md:gap-x-4 items-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <IoStar key={idx} className="size-4 md:size-5" />
              ))}
              <p className="text-sm md:text-base">5 Rate by 1,000+ Reviews</p>
            </div>

            <h2 className="text-4xl md:text-7xl">Discover the <span className="text-blue-500">World with us.</span></h2>
            <p className="text-sm md:text-base">From breathtaking landscapes to cultural wonders, we craft journeys that bring your dream destinations to life. Whether you’re planning a relaxing getaway or an adventure-filled expedition, our team ensures every detail is taken care of.</p>
          </div>

          <div className="flex flex-col gap-y-6">
            {offers.map((offer, idx) => (
              <div key={idx} className="flex gap-x-4 md:gap-x-6 items-center">
                <FaCheck className="size-4 md:size-6 text-blue-500" />
                <p className="text-sm md:text-base">{offer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 flex-1 h-[70vh]">
          <img src={vertical} alt="vertical" className="rounded-md flex-1 h-full object-cover" />
          <div className="flex flex-col gap-y-6">
            <img src={horizontal} alt="horizontal" className="rounded-md h-full object-cover" />
            <img src={horizontal2} alt="horizontal" className="rounded-md h-[40vh] object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full gap-8 md:gap-x-16 flex-wrap md:flex-nowrap">
        {informations.map((information, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-center">
            <p className="text-5xl md:text-6xl text-blue-500">{information.total}k+</p>
            <p className="text-sm md:text-base font-semibold whitespace-break-spaces">{information.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}