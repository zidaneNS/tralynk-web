import type { IconType } from "react-icons"
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const contactIcons: IconType[] = [
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
];

const companies: string[] = [
  'About us',
  'Destination',
  'Packages',
  'Contact'
];

const utilities: string[] = [
  '404 Page',
  'Style Guide',
  'Changelog',
  'Licences'
];

export default function FooterSection() {
  return (
    <div className="flex flex-col gap-y-8 py-12 bg-black w-full text-white">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 w-full px-4 md:px-12">
        <div className="flex flex-col gap-y-4 w-full">
          <p className="text-4xl text-center font-semibold">Tra<span className="text-blue-500">Lynk</span></p>
          <p className="max-w-full text-center md:text-left">Turning your travel dreams into unforgettable journeys.</p>
          <div className="flex gap-x-4 items-center justify-center">
            {contactIcons.map((Contact, idx) => (
              <Contact key={idx} className="size-6" />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-y-6 w-full">
            <p className="text-slate-400">Company</p>
            {companies.map((company, idx) => (
              <a href="#" key={idx}>{company}</a>
            ))}
          </div>

          <div className="flex flex-col gap-y-6 w-full">
            <p className="text-slate-400">Utilities</p>
            {utilities.map((utility, idx) => (
              <a href="#" key={idx}>{utility}</a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-6 w-full">
          <p>Singapore Office</p>
          <p>3rd Floor, Sunrise Plaza, Mumbai, India</p>
        </div>

        <div className="flex flex-col gap-y-6 w-full">
          <p>Contact</p>
          <p className="text-slate-400">+62 831 1234 5678</p>
          <p className="text-slate-400">hello@tralynk.com</p>
          <p className="text-slate-400">Mon - Sat (9 AM - 8PM)</p>
        </div>
      </div>

      <span className="w-full border-b border-slate-700"></span>
      <div className="flex justify-between px-4 md:px-12 md:py-8">
        <p className="text-sm md:text-base text-slate-400">2025 TraLynk Travel World. | Designed with ❤️ for explorers.</p>
      </div>
    </div>
  )
}