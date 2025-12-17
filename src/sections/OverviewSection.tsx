import { FaCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const offers = [
  'Premium Stays & Exclusive Deals',
  'Tailored Packages for Every Traveler',
  'Unmatched Support Before & During Trips'
]

export default function OverviewSection() {
  return (
    <div className="flex flex-col gap-y-12 px-16 py-8 w-full">
      <div className="flex w-full gap-x-12">
        <div className="flex flex-col justify-stretch max-w-1/2">
          <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-4 items-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <IoStar key={idx} className="size-4 md:size-5" />
              ))}
              <p className="text-sm md:text-base">5 Rate by 1,000+ Reviews</p>
            </div>

            <h2 className="text-5xl font-bold">Discover the <span className="text-blue-500">World with us.</span></h2>
            <p className="text-sm md:text-base">From breathtaking landscapes to cultural wonders, we craft journeys that bring your dream destinations to life. Whether you’re planning a relaxing getaway or an adventure-filled expedition, our team ensures every detail is taken care of.</p>
          </div>

          <div className="flex flex-col gap-y-6">
            {offers.map((offer, idx) => (
              <div key={idx} className="flex gap-x-6 items-center">
                <FaCheck className="size-4 md:size-6 text-blue-500" />
                <p className="text-sm md:text-base">{offer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}