"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ServiceSelect } from "@/components/ui/CustomSelect";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [service, setService] = useState("");



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("service", service);


    try {
      const res = await fetch("https://formspree.io/f/xyzpzrna", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us to schedule your car care service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Ready to give your car the care it deserves? Contact us today to
              schedule an appointment or get a quote for our services.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">
                    2 Larkspur Drive, Evesham, England, WR11 2NQ
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+01905 948868 / 07350 249369</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">info@treatyourcar.co.uk</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p className="text-gray-300">Mon-Sun: 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form with JS Submit */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                name="firstName"
                placeholder="First Name"
                required
                className="bg-gray-800 border border-gray-600 text-white"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                required
                className="bg-gray-800 border border-gray-600 text-white"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-gray-800 border border-gray-600 text-white"
              />
              <Input
                name="phone"
                placeholder="Phone Number with +44 7123 456 789"
                required
                pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
                title="Enter a valid UK phone number"
                className="bg-gray-800 border border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">
                Select a Service
              </label>
              <ServiceSelect value={service} onChange={setService} />
            </div>

            <Textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              required
              className="bg-gray-800 border border-gray-600 text-white"
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Modal Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="mb-4">Your message has been sent successfully.</p>
            <p className="mb-2">Our team will contact you shortly.</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setIsSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
