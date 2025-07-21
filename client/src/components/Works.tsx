import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const works = [
  {
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    title: "Premium Detailing",
    description: "Complete interior and exterior detailing service",
    duration: "3-4 Hours"
  },
  {
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    title: "Paint Correction",
    description: "Professional paint restoration and protection",
    duration: "5-6 Hours"
  },
  {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    title: "Ceramic Coating",
    description: "Long-lasting protection with ceramic coating",
    duration: "6-8 Hours"
  },
  {
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    title: "Interior Deep Clean",
    description: "Complete interior sanitization and restoration",
    duration: "2-3 Hours"
  },
  {
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    title: "Engine Bay Detail",
    description: "Professional engine cleaning and protection",
    duration: "1-2 Hours"
  },
  {
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    title: "Premium Wash",
    description: "Full-service wash with premium products",
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
            See the transformation and quality of our automotive care services
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
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Works
          </Button>
        </div>
      </div>
    </section>
  );
}
