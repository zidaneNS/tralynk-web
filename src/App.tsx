import hero from "./assets/images/img-hero-bg.jpg";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import OverviewSection from "./sections/OverviewSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow relative">
      <Navbar />
      <img src={hero} alt="hero" className="object-center h-screen w-screen absolute top-0 -z-10 object-cover" />
      <Home />
      <OverviewSection />
    </div>
  )
}