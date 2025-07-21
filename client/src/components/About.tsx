import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Treat Your Car</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in automotive care and excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern car service center interior" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold">Premium Auto Care Since 2010</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Treat Your Car has been the leading automotive care service provider, dedicated to maintaining and enhancing your vehicle's performance, appearance, and value. With over a decade of experience, we've built our reputation on quality, reliability, and exceptional customer service.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team of certified professionals uses state-of-the-art equipment and eco-friendly products to ensure your vehicle receives the best possible care. From routine maintenance to premium detailing services, we treat every car as if it were our own.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-500 mb-2">10K+</div>
                <div className="text-gray-300">Cars Serviced</div>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-500 mb-2">13+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
