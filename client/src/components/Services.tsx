import { CarFront, Sparkles, Shield, Wrench, Settings, Smartphone, Check, Waves, SprayCanIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CarFront,
    title: "Mini Valet",
    description: "Quick refresh for both interior and exterior.",
    features: ["Snow foam pre-wash & hand wash", "Tyres shined & wheels cleaned", "Interior vacuum & dashboard wiped"]
  },
  {
    icon: Shield,
    title: "Full Valet",
    description: "Comprehensive car cleaning inside and out.",
    features: ["Spot stain removal & fresh fragrance", "Interior deep cleaning", "Boot, vents & wheel arches cleaned"]
  },
  {
    icon: Sparkles,
    title: "Deep Clean Valet",
    description: "Complete detailing service to restore your car's showroom appearance",
    features: ["Ceramic coating application", "Upholstery shampoo & carpet extraction", "Plastic trims & vents deep-cleaned," , "Intense exterior treatment"]
  },
  {
    icon: Settings,
    title: "Engine Bay Detail",
    description: "Enhance engine appearance & cleanliness.",
    features: ["Safe degreasing & steam cleaning", "Professional finish & resale boost", "Engine bay cleaning"]
  },
  {
    icon: SprayCanIcon,
    title: "Seats & Dashboard Polish",
    description: "Bring life back to your car’s interior.",
    features: ["Vacuumed seats & dust removal", "Polished dashboard with premium shine", "Fresh, clean interior feeling"]
  },
  {
    icon: Smartphone,
    title: "Mobile Service",
    description: "Convenient at-home or office car care services delivered to your location.",
    features: ["On-site service", "Flexible scheduling", "Same-day availability"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive automotive care services tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-gray-900 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl text-blue-500 mb-4 justify-center flex">
                  <IconComponent className="w-10 h-10 " />
                </div>
                <h3 className="text-2xl font-bold mb-4 justify-center flex">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
