import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";
import destinationImg from "../assets/images/img-destination.jpg";

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
        <button onClick={() => changePage('prev')} className="bg-white py-2 px-4 rounded-md cursor-pointer hover:bg-slate-700 hover:text-white duration-300">Prev</button>
        <div className="max-w-1/2">
          <Carousel
            ref={carouselRef}
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx}>
                <div className="flex w-full">
                  <img src={destinationImg} alt="destination" className="w-1/2 h-auto object-cover flex-1" />
                  <div className="flex flex-col justify-center gap-y-8 w-1/2 h-auto flex-1 bg-slate-200">
                    <p className="text-3xl font-semibold">Title</p>
                    <p></p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button onClick={() => changePage('next')} className="bg-white py-2 px-4 rounded-md cursor-pointer hover:bg-slate-700 duration-300">Next</button>
      </div>
    </div>
  )
}