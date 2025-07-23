import { Button } from "@/components/ui/button";
import React from "react";
import aboutImg from "../images/aboutus-i.png"; // Ensure you have an image at this path

export default function About() {
  return (
    <section id="about" className="py-20 bg-black-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Treat Your Car</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in Car detailing Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img
              src={aboutImg}
              alt="Modern car service center interior"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold">Premium Auto Care Service</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Treat Your Car (TYC), we believe your vehicle deserves the same
              level of care and attention you give yourself. Founded with a
              passion for pristine vehicles and customer satisfaction, we
              specialize in professional car valeting and detailing services
              designed to revive, protect, and maintain your vehicle's showroom
              shine.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's a quick Mini Valet, a comprehensive Deep Clean, or
              specialized treatments like Engine Bay Detailing and Leather
              Conditioning, our team brings skill, precision, and dedication to
              every job. We proudly serve the areas of Evesham, Worcester,
              Redditch, and Cheltenham, offering doorstep services that are
              convenient, affordable, and high in quality. From routine
              maintenance to premium detailing services, we treat every car as
              if it were our own. With TYC, your car isn't just cleaned — it's
              pampered.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Join the TYC family today and experience the difference of a
              service that truly cares. Your car deserves the best, and so do
              you.
            </p>

            <div className="pt-6">
              <Button
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
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
