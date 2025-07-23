import { motion } from "framer-motion";
import { CheckCircle, Star, Shield, Clock, Users, Award, Zap, Heart, ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import carwhychooseus from "../images/car-whychooseus.jpg"; // ✅ Replace with your image path

const WhyChooseUs = () => {
  const features = [
    {
      icon: Star,
      title: "Top-Quality Service",
      description: "We use premium products and techniques to ensure your car gets nothing but the best.",
      color: "from-yellow-400 to-orange-500",
      delay: 0.1
    },
    {
      icon: Users,
      title: " Trusted by Customers",
      description: "With a growing base of happy clients, we’re proud of our strong reputation and repeat business.",
      color: "from-blue-400 to-purple-500",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Fully Insured & Reliable",
      description: "our vehicle is safe with us — we’re fully insured and always professional.",
      color: "from-green-400 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Zap,
      title: "Quick & Efficient",
      description: "We value your time. Our services are prompt without compromising quality.",
      color: "from-cyan-400 to-blue-500",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "Flexible Appointments",
      description: "We work around your schedule with hassle-free, on-time appointments.",
      color: "from-purple-400 to-pink-500",
      delay: 0.5
    },
    {
      icon: Award,
      title: "Experienced Professionals",
      description: "Our trained experts bring years of detailing experience to every job.",
      color: "from-red-400 to-rose-500",
      delay: 0.6
    },
    {
      icon: Heart,
      title: "Personalized Car Care",
      description: "Every vehicle is different - Tailored services to meet your specific vehicle needs",
      color: "from-pink-400 to-red-500",
      delay: 0.7
    },
    {
      icon: CheckCircle,
      title: "Mobile Service",
      description: "Convenient service at your home or office location",
      color: "from-emerald-400 to-green-500",
      delay: 0.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const carVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Back Button */}
      <motion.div 
        // className="fixed top-20 left-4 z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <motion.button
            className="flex items-center gap-1 bg-gray-800 backdrop-blur-sm border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(31, 41, 55, 0.9)"
            }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.button>
        </Link>
      </motion.div>

      <div className="pt-10">
      {/* Hero Section */}
      <motion.section 
        className="relative py-0 px-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-black-500 to-blue-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Why Choose Us?
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-1 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Elevate your ride with premium car care tailored to perfection.
          </motion.p>
        </div>

        {/* /* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-2 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-20"
            animate={{
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-200 rounded-full opacity-20"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </motion.section>

      {/* Car Illustration with Pointing Features */}
      <section className="py-1 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Static Car Detailing Image with On-Click Animation */}
<motion.div 
  className="flex justify-around mb-20 py-4"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
>
  <motion.img 
    src={carwhychooseus} // ✅ Replace with your image path
    alt="Car Detailing Service"
    className="rounded-xl shadow-lg object-cover max-w-3xl w-full cursor-pointer"
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeInOut" }
    }}
    whileHover={{
      scale: 1.03,
      transition: { duration: 0.4, ease: "easeInOut" }
    }}
  />
</motion.div>


            {/* Feature Points Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {/* Connecting Line to Car */}
                    <motion.div
                      className="absolute top-8 left-1/2 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-30"
                      style={{ height: "100px" }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 1, delay: feature.delay }}
                    />

                    <motion.div
                      className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
                      whileHover={{
                        backgroundColor: "rgba(17, 24, 39, 0.8)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {/* Icon with Gradient Background */}
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-3 mb-4 mx-auto`}
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-xl font-bold text-center mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-gray-400 text-center text-sm leading-relaxed"
                        whileHover={{ color: "#E5E7EB" }}
                      >
                        {feature.description}
                      </motion.p>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-black-500 to-blue-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05, color: "#F3F4F6" }}
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            whileHover={{ color: "#F3F4F6" }}
          >
            Join a growing community that values excellence — your car deserves the attention we’re known for.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r  from-blue-800 via-black-500 hover:text-white   font-semibold rounded-lg  hover:from-blue-500 to-slate-400 text-black-white transition-all duration-300 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Navigate to home and scroll to contact
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Book Your Service
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(31, 41, 55, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Navigate to home and scroll to services
                  setTimeout(() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      </div>
    </div>
  );
};

export default WhyChooseUs;