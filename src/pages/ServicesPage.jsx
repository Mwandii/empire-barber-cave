import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { useState } from "react";
import serviceData from "../data/ServicesData";

function ServicesPage() {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <div className="bg-[#f9f8f6] text-gray-800 font-raleway">
      {/* Navbar */}
      <div className="bg-black py-2 px-1 shadow-md sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Header Section */}
      <AnimateOnScroll>
        <section className="flex flex-col items-center text-center py-12 px-6">
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-gray-700 max-w-3xl leading-relaxed">
            At Empire Barber Cave, we take pride in delivering premium grooming
            experiences that bring out your best look. Below are some of the
            services we offer to keep you looking sharp and confident.
          </p>
        </section>
      </AnimateOnScroll>

      {/* Services Grid */}
      <section className="px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {serviceData.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 100}>
              <div
                onClick={() => handleFlip(item.id)}
                className="relative w-64 h-80 perspective cursor-pointer"
              >
                {/* Inner Flip Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedId === item.id ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-md border border-yellow-100 overflow-hidden group transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gold hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

                    <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                      <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500">
                        Tap to view services
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full bg-white rounded-xl shadow-md rotate-y-180 backface-hidden p-4 overflow-y-auto border border-yellow-100">
                    <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">
                      {item.name}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {item.services.map((service, i) => (
                        <li
                          key={i}
                          className="flex justify-between border-b border-gray-200 last:border-none pb-1"
                        >
                          <span>{service.name}</span>
                          <span className="font-semibold text-yellow-600">
                            Ksh {service.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-center text-yellow-600 mt-4 text-sm font-medium">
                      Tap to go back
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ServicesPage;
