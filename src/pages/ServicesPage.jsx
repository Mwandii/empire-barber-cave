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
    <>
    <div className="bg-black">
    <Navbar/>
    </div>
    <main>
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
                className="w-full h-44 object-cover"
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
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default ServicesPage;
