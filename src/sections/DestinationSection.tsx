import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { destinations } from "../mockup/destination";

export default function DestinationSection() {
  const carouselRef = useRef<CarouselRef | null>(null);

  function changePage(method: 'next' | 'prev') {
    if (!carouselRef.current) return;
    method === 'next' ? carouselRef.current.next() : carouselRef.current.prev();
  }

  return (
    <div className="flex flex-col w-full items-center px-8 py-16 gap-y-8 bg-blue-50">
      <p className="text-sm">Discover the places travelers love the most!</p>
      <h1 className="text-5xl md:text-6xl font-semibold text-center">Most Popular<br /><span className="text-blue-500">destinations</span></h1>
      <p className="text-center max-w-1/3">From breathtaking landscapes to vibrant cultures, these destinations are handpicked to give you unforgettable memories.</p>

      <div className="flex w-full justify-center items-center gap-x-8">
        <button onClick={() => changePage('prev')} className="bg-white p-2 rounded-full cursor-pointer hover:bg-slate-500 flex justify-center items-center hover:text-white duration-300">
          <FaChevronLeft className="size-6" />
        </button>
        <div className="max-w-3/4">
          <Carousel
            ref={carouselRef}
            infinite
            autoplay
          >
            {destinations.map((destination, idx) => (
              <div key={idx}>
                <div className="flex w-full">
                  <img src={destination.imgSrc} alt="destination" className="w-1/2 h-auto object-cover flex-1" />
                  <div className="flex flex-col justify-center p-8 gap-y-8 w-1/2 h-auto flex-1 bg-white">
                    <p className="text-6xl">{destination.name},<span className="italic">{destination.subName}</span></p>
                    <p className="text-sm text-slate-500">{destination.desc}</p>
                    <div className="flex flex-wrap gap-6">
                      {destination.places.map((place, placeId) => (
                        <div key={placeId} className="flex gap-x-4 items-center">
                          <FaCheck className="size-4 text-blue-500" />
                          <p className="font-semibold">{place}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center gap-6 items-center">
                      <button className="bg-blue-500 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-blue-400 duration-300 text-sm">Book your Tour</button>
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
              </div>
            ))}
          </Carousel>
        </div>
        <button onClick={() => changePage('next')} className="bg-white p-2 rounded-full cursor-pointer hover:bg-slate-500 flex justify-center items-center hover:text-white duration-300">
          <FaChevronRight className="size-6" />
        </button>
      </div>
    </div>
  )
}