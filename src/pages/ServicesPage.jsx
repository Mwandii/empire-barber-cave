import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import serviceData from "../data/ServicesData";

function ServicesPage() {

  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id)
  }

  return (
    <div>
    <div className="bg-black py-4">
    <Navbar/>
    </div>
    <div className="fade-in">
    <div className="flex flex-col items-center">
    <h2 className=" font-bold text-2xl md:text-4xl p-3 mb-4 md:my-10">Our Services</h2>
    <p className="text-center text-md md:text-lg max-w-4xl mx-10 mb-8">At Empire Barber Cave, we take pride in delivering premium grooming experiences that bring out your best look.
Below are some of the services we offer to keep you looking sharp and confident.</p>
    </div>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center p-6 md:my-10">
      {serviceData.map((item) => (
        <div key={item.id} className="relative w-64 h-80 perspective cursor-pointer"
        onClick={() => handleFlip(item.id)}>
          {/*inner flip container*/}
          <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              flippedId === item.id ? "rotate-y-180" : ""
            }`}>
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                src={item.image}
                alt={item.name}
                className="w-full h-58 object-cover"
              />
              <h2 className="text-center text-lg font-semibold mt-4">
                {item.name}
              </h2>
              <p className="text-center text-gray-500 text-sm mt-2">
                Tap to view services
              </p>
              </div>
              {/*Back*/}
              <div className="absolute w-full h-full bg-white rounded-xl shadow-lg rotate-y-180 backface-hidden p-4 overflow-y-auto">
              <h3 className="text-lg font-semibold text-center mb-3">
                {item.name}
              </h3>
              <ul className="space-y-2 text-sm">
                {item.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b last:border-none pb-1"
                  >
                    <span>{service.name}</span>
                    <span className="font-semibold">Ksh {service.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-blue-600 mt-4 text-sm">
                Tap to go back
              </p>
            </div>
            </div>
        </div>
      ))}
    </main>
      <Footer/>
    </div>
    </div>
  );
}

export default ServicesPage;
