import type { IconType } from "react-icons";
import bgImg from "../assets/images/img-bg.jpg";
import { FaMoneyBillWave, FaPlane, FaTaxi } from "react-icons/fa";
import { RiGuideLine } from "react-icons/ri";

interface Benefit {
  Icon: IconType;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  {
    Icon: FaPlane,
    title: 'Instant booking',
    desc: 'No more waiting! Book your flights, hotels, and activities instantly with our hassle-free system.'
  },
  {
    Icon: FaTaxi,
    title: 'Pickup and drop',
    desc: 'Enjoy smooth and reliable transfers with our door-to-door pickup and drop service.'
  },
  {
    Icon: RiGuideLine,
    title: 'Tourist Guide',
    desc: 'No more waiting! Book your flights, hotels, and activities instantly with our hassle-free system.'
  },
  {
    Icon: FaMoneyBillWave,
    title: 'Friendly price',
    desc: 'We offer transparent pricing and value-for-money packages that suit every budget—without compromising on comfort and quality.'
  },
]

export default function BenefitSection() {
  return (
    <div className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${bgImg})`}}>
      <div className="flex flex-col gap-y-6 md:gap-y-8 px-4 py-12 w-full bg-black/70 items-center text-white">
        <h1 className="text-4xl md:text-6xl font-semibold text-center">Why we're your<br /><span className="text-blue-500">perfect travel partner</span></h1>
        <p className="text-sm md:text-base text-center md:max-w-1/3">we believe travel is more than just visiting new places<br />—it’s about creating unforgettable experiences.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full md:w-2/3">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col gap-y-2 md:gap-y-4 h-auto w-full">
              <benefit.Icon className="size-8 md:size-12 text-blue-500 p-2 bg-white rounded-full" />
              <p className="text-xl md:text-2xl font-semibold">{benefit.title}</p>
              <p className="text-sm md:text-base">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}