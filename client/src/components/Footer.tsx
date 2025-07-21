import { Car, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-500 flex items-center">
              <Car className="mr-2" />
              Treat Your Car
            </div>
            <p className="text-gray-400">
              Your trusted partner in automotive care and excellence. Professional services for all your car care needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Car Washing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Auto Detailing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Paint Protection</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Engine Care</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Mobile Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('works');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Our Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get updates on special offers and services.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-lg focus:border-blue-500 focus:outline-none"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Treat Your Car. All rights reserved. Designed with ❤️ for automotive excellence.</p>
        </div>
      </div>
    </footer>
  );
}
