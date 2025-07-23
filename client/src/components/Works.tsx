import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import minivalet from "../images/minivalet.jpg"; 
import fullValet from "../images/fullvalet.jpg"; 
import interiorcleaning from "../images/interiorcleaning.jpg"; 
import seatscleaning from "../images/seatscleaning.jpg";
import enginebay from "../images/polishingcar.jpg";
import ceramiccoating from "../images/ceramiccoating.jpg";


const works = [
  {
    image: minivalet,
    title: "Mini Valet",
    description: "Exterior wash with snow foam, tyre shine, full interior vacuum & window clean.",
    duration: "45min -1 hour"
  },
  {
    image: fullValet,
    alt : "Full Valet Service",
    title: "Full Valet Detailing",
    description: "Includes Mini Valet plus boot clean, plastic dressing, stain removal & fragrance.",
    duration: "1-2 Hours"
  },
  
  {
    image: interiorcleaning,
    title: " Deep Valet",
    description: "Long-lasting protection with ceramic coating",
    duration: "3-4 Hours"
  },
  {
    image: seatscleaning,
    alt: "Seat Cleaning",
    title: "Seats Cleaning & Dashboard Polish",
    description: "Vacuumed seats and dashboard cleaned with premium shine polish.",
    duration: "1 Hour"
  },
  {
    image: enginebay,
    title: "Engine Bay Detail",
    description: "Professional engine cleaning and protection",
    duration: "1-2 Hours"
  },
  {
    image: ceramiccoating,
    alt: "Ceramic Coating",
    title: "ceramic caoting",
    description: "polishing ceramic coating for advanced protection that enchances shines.",
    duration: "45-60 Min"
  }
];

export default function Works() {
  return (
    <section id="works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming every ride with unmatched detailing precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-300 mb-4">{work.description}</p>
                <div className="flex items-center text-sm text-blue-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{work.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
