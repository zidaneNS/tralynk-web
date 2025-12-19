import hero from "./assets/images/img-hero-bg.jpg";
import Navbar from "./components/Navbar";
import BenefitSection from "./sections/BenefitSection";
import ContactSection from "./sections/ContactSection";
import DestinationSection from "./sections/DestinationSection";
import FooterSection from "./sections/FooterSection";
import Home from "./sections/Home";
import MoreDestination from "./sections/MoreDestination";
import OverviewSection from "./sections/OverviewSection";
import PackageSection from "./sections/PackageSection";
import ReviewSection from "./sections/ReviewSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow relative">
      <Navbar />
      <img src={hero} alt="hero" className="object-center h-screen w-screen absolute top-0 -z-10 object-cover" />
      <Home />
      <OverviewSection />
      <DestinationSection />
      <BenefitSection />
      <PackageSection />
      <ReviewSection />
      <MoreDestination />
      <ContactSection />
      <FooterSection />
    </div>
  )
}