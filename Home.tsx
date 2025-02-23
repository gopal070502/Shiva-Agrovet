import React, { useEffect, useState } from 'react';
import { Truck, Package, Store, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from "next/router";


const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: 'url(https://www.hightoppoultry.com/wp-content/uploads/different-types-of-chickens.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Leading the Future of
              <span className="block text-orange-500">Poultry Business</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Authorized dealer of premium feeds including Vimala Feed, Godrej Feed, and Krishi Feed.
              Providing comprehensive solutions for modern poultry farming.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
                onClick={() => {
                  window.location.href = "/contact";
                }}
                
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
                onClick={() => {
                  window.location.href = "/about";
                }}
                
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your poultry business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Package className="w-8 h-8" />,
                title: "Premium Feeds",
                description: "Authorized dealer of Vimala, Godrej, and Krishi Feed"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Shiva Traders",
                description: "Efficient transportation services for your poultry"
              },
              {
                icon: <Store className="w-8 h-8" />,
                title: "Venus Chicken",
                description: "Retail outlet for quality poultry products"
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Automation",
                description: "Modern poultry equipment and EC shed solutions"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-orange-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Poultry Business?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-orange-600 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => {
              window.location.href = "/contact";
            }}
            
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;