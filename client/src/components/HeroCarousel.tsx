import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import slide1 from "../images/contact-img.png";
import slide2 from "../images/car images.png"; // Example image, replace with actual path
import slide3 from "../images/carclean.png"; // Example image, replace with actual

const slides = [
  {
    image: slide1,
    title: "Premium Auto Care Services",
    subtitle: "Experience luxury car care with professional expertise and attention to detail",
    primaryButton: "Get Started",
    secondaryButton: "Learn More"
  },
  {
    image: slide2,
    title: "Expert Detailing Services",
    subtitle: "Restore your car's beauty with our professional detailing and care services",
    primaryButton: "Book Service",
    secondaryButton: "View Gallery"
  },
  {
    image: slide3,
    title: "Professional Car Wash",
    subtitle: "State-of-the-art facilities and eco-friendly solutions for the perfect clean",
    primaryButton: "Schedule Now",
    secondaryButton: "Our Services"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="carousel-container relative w-full h-full ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pt- md:pt-44">
              <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
                  {slide.title.split(' ').map((word, wordIndex) => (
                    word === 'Auto' || word === 'Detailing' || word === 'Car' ? (
                      <span key={wordIndex} className="text-blue-500">{word} </span>
                    ) : (
                      <span key={wordIndex}>{word} </span>
                    )
                  ))}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <div className="space-x-4 animate-fade-in-up animation-delay-400">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.primaryButton}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('about')}
                    className="border-2 bg-black border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-white"
                  >
                    {slide.secondaryButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 py-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-opacity duration-300 ${
              index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50'
            }`}
          />
        ))}
      </div>
      
      {/* Carousel Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
}
