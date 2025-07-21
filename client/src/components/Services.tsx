import { CarFront, Sparkles, Shield, Wrench, Settings, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CarFront,
    title: "Car Washing",
    description: "Professional exterior and interior washing with premium products and techniques.",
    features: ["Exterior wash & wax", "Interior vacuum & wipe", "Tire & rim cleaning"]
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description: "Complete detailing service to restore your car's showroom appearance.",
    features: ["Paint correction & polish", "Interior deep cleaning", "Protective coating"]
  },
  {
    icon: Shield,
    title: "Paint Protection",
    description: "Advanced protection solutions including ceramic coating and paint protection film.",
    features: ["Ceramic coating application", "Paint protection film", "Long-term warranty"]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Regular maintenance services to keep your vehicle running at peak performance.",
    features: ["Oil change & filter", "Brake inspection", "Fluid top-up"]
  },
  {
    icon: Settings,
    title: "Engine Care",
    description: "Specialized engine cleaning and maintenance for optimal performance.",
    features: ["Engine bay cleaning", "Performance tuning", "Diagnostic check"]
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
                <div className="text-4xl text-blue-500 mb-4">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
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
        
        {/* Featured Service Image */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Featured Service Package</h3>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Comprehensive detailing service showcase" 
              className="rounded-xl shadow-2xl w-full h-auto mb-8"
            />
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Premium Package
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
