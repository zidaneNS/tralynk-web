import hero from "./assets/images/img-hero-bg.jpg";
import Home from "./sections/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow relative">
      <img src={hero} alt="hero" className="object-center h-screen w-screen absolute top-0 -z-10 object-cover" />
      <Home />
    </div>
  )
}