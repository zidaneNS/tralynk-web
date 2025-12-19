import { Carousel } from "antd";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import profile from "../assets/images/img-profile-pic.jpg";
import { useRef } from "react";
import type { CarouselRef } from "antd/es/carousel";

export default function ReviewSection() {
  const carouselRef = useRef<CarouselRef | null>(null);

  function changePage(method: 'next' | 'prev') {
    if (!carouselRef.current) return;

    method === 'next' ? carouselRef.current.next() : carouselRef.current.prev();
  }

  return (
    <div id="reviews" className="flex flex-col items-center gap-y-8 py-12 md:p-12 bg-blue-50 w-full scroll-mt-16">
      <div className="flex flex-col gap-y-6 items-center px-2">
        <div className="flex gap-x-4 items-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <FaStar key={idx} className="size-4 md:size-5" />
          ))}
          <p className="text-xs md:text-base">5 Rate by 1,000+ Reviews</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold text-center">What our clients say</h1>
        <p className="text-center md:max-w-1/2">We take pride in serving our travelers with unforgettable journeys around the world. Here’s what they shared about their experiences with escapora travel world:</p>
      </div>

      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 px-2 md:gap-x-12 md:justify-center items-center w-full">
        <FaChevronLeft onClick={() => changePage('prev')} className="hidden md:block size-12 bg-white p-3 rounded-full cursor-pointer hover:bg-slate-200 duration-300 shadow-md" />
        <div className="w-full md:w-2/3">
          <Carousel
            infinite
            autoplay
            dots={false}
            ref={carouselRef}
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx}>
                <div className="flex flex-col gap-y-3 md:gap-y-6 w-full">
                  <div className="flex gap-x-2 items-center">
                    {Array.from({ length: 5 }).map((_, rateId) => (
                      <FaStar key={rateId} className="size-4 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-lg md:text-2xl">"Our Europe trip was simply magical! From smooth airport transfers to guided city tours, everything was well-organized. Escapora Travel World made Paris and Switzerland feel effortless and memorable."</p>
                  <div className="flex gap-x-4 md:gap-x-6 items-center">
                    <img src={profile} alt="profile pic" className="aspect-square w-12 rounded-full object-center object-cover" />
                    <p className="text-sm md:text-base">Mr. & Mrs. Khanna, Delhi</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <FaChevronRight onClick={() => changePage('next')} className="hidden md:block size-12 bg-white p-3 rounded-full cursor-pointer hover:bg-slate-200 duration-300 shadow-md" />

        <div className="flex gap-x-2 items-center md:hidden">
          <FaChevronLeft onClick={() => changePage('prev')} className="size-8 bg-white p-2 rounded-full cursor-pointer hover:bg-slate-200 duration-300 shadow-md" />
          <FaChevronRight onClick={() => changePage('next')} className="size-8 bg-white p-2 rounded-full cursor-pointer hover:bg-slate-200 duration-300 shadow-md" />
        </div>
      </div>
    </div>
  )
}