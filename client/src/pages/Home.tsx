import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import WhyChooseUs from '../components/Whychooseus';
import Works from "@/components/Works";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <section id="home"><HeroCarousel /></section>
      <section id="about"><About /></section>
      <section id="whychooseus"><WhyChooseUs /></section>
      <section id="works"><Works /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
