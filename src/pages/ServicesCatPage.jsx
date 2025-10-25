import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import serviceData from "../data/ServicesData";

function ServicesCatPage() {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategoryId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-black py-2">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        <h2 className="text-center text-2xl font-black mt-6 mb-4 px-3 sm:text-3xl">
          Our Services
        </h2>

        <div className="flex-1 px-4 sm:px-8 lg:px-16 pb-8 space-y-4">
          {serviceData.map((category) => (
            <div
              key={category.id}
              className="border rounded-xl overflow-hidden shadow-sm bg-white"
            >
              {/* Header (clickable) */}
              <div
                onClick={() => toggleCategory(category.id)}
                className="flex justify-between items-center p-4 sm:p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-lg sm:text-xl">
                  {category.name}
                </h3>
                <span className="text-2xl leading-none font-bold">
                  {openCategoryId === category.id ? "−" : "+"}
                </span>
              </div>

              {/* Body (only visible if open) */}
              {openCategoryId === category.id && (
                <div className="p-4 sm:p-6 border-t bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="p-3 border rounded-lg shadow-sm hover:shadow-md transition text-center sm:text-left"
                      >
                        <p className="font-semibold text-base sm:text-lg">
                          {service.name}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Ksh {service.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer always at bottom */}
      <footer className="bg-black text-white mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default ServicesCatPage;
