import { useState } from "react";
import { Car, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const downloadBrochure = async () => {
    try {
      const response = await fetch('/api/brochure/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Treat-Your-Car-Brochure.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error downloading brochure:', error);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-500 flex items-center">
              <Car className="mr-2" />
              Treat Your Car
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('works')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              >
                Works
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              >
                Contact Us
              </button>
              <Button 
                onClick={downloadBrochure}
                className="bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-300 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-300 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('works')}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-300 w-full text-left"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-300 w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-300 w-full text-left"
            >
              Contact Us
            </button>
            <Button 
              onClick={downloadBrochure}
              className="w-full bg-blue-600 hover:bg-blue-700 text-base font-medium transition-colors duration-300 mt-2"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
