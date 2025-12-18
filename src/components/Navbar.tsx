import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  {
    href: '#home',
    label: 'Home'
  },
  {
    href: '#destination',
    label: 'Destination'
  },
  {
    href: '#packages',
    label: 'Holiday Packages'
  },
  {
    href: '#reviews',
    label: 'Reviews'
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollVal, setScrollVal] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100;
      setScrollVal(Math.min(window.scrollY / maxScroll, 0.95));
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div 
      className="flex justify-between px-4 md:px-16 py-4 items-center fixed top-0 w-screen duration-300 z-50"
      style={{
        backgroundColor: `rgba(0,0,0,${scrollVal})`
      }}  
    >
      <h1 className="text-xl md:text-2xl font-bold text-white z-10">Tra<span className="text-blue-500">Lynk</span></h1>
      <div className="hidden md:flex gap-x-12 items-center text-white z-10">
        {navLinks.map((navLink, idx) => (
          <a href={navLink.href} key={idx} className="hover:text-blue-500 duration-300">{navLink.label}</a>
        ))}
      </div>
      <GiHamburgerMenu onClick={() => setIsOpen(prev => !prev)} className="text-white size-6 md:hidden z-10" />
      <div className={`fixed ${isOpen ? 'top-0' : '-top-full'} w-screen flex flex-col gap-y-6 items-center px-4 pt-12 py-6 bg-black/80 rounded-b-xl text-white left-0 backdrop-blur-md duration-300`}>
        {navLinks.map((navLink, idx) => (
          <a onClick={() => setIsOpen(false)} href={navLink.href} key={idx} className="hover:text-blue-500 duration-300 text-sm py-2 border-b border-white w-full text-center">{navLink.label}</a>
        ))}
      </div>
    </div>
  )
}