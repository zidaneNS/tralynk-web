import { IoStar } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:justify-end h-screen bg-black/60 py-12 md:py-32 gap-y-8 md:gap-y-12 text-white">
      <div className="flex gap-x-3 items-center">
        {Array.from({ length: 5 }).map((_, idx) => (
          <IoStar key={idx} className="size-4 md:size-5" />
        ))}
        <p className="text-sm md:text-base">5 Rate by 1,000+ Reviews</p>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold md:max-w-3/4 text-center">Discover the world, one journey at a time.</h1>
      <p className="text-center">Handpicked travel packages designed to make every trip unforgettable.</p>
      <div className="flex flex-col md:flex-row md:justify-center gap-6 items-center">
        <button className="bg-white text-black py-2 px-6 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white duration-300 text-sm">Book your Tour</button>
        <div className="flex gap-x-2 items-center">
          <div className="flex justify-center items-center bg-black/40 rounded-full border border-white p-2">
            <LuPhone className="size-4 md:size-6" />
          </div>
          <div className="flex flex-col">
            <p className="text-slate-300 text-xs md:text-sm">Contact anytime</p>
            <p className="text-xs md:text-sm">(555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  )
}