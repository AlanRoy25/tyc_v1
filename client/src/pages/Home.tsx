import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroCarousel />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
