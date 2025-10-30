import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaClock, FaCut, FaSmile } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  // Initialize AOS once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <div className="bg-black py-2 px-1">
        <Navbar />
      </div>

      {/* Hero Banner */}
      <div data-aos="fade-in">
        <img
          src="https://dailybarber.com/wp-content/uploads/Big-Als-Barbershop-Broomall-2.jpg"
          alt="Barber shop banner"
          className="w-full h-[40vh] object-cover"
        />
      </div>

      {/* Headline */}
      <section
        data-aos="fade-up"
        className="text-center py-10 bg-linear-to-b from-white to-gray-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Look good. Feel better.
        </h2>
      </section>

      {/* Our Story */}
      <section
        className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-10"
        data-aos="fade-up"
      >
        <img
          src="https://images.unsplash.com/photo-1589381855733-01bb5380dedf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
          alt="Our Story"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Empire Barber Cave is where clean cuts meet good vibes. We’re all
            about precision, confidence, and comfort — giving you more than just
            a haircut, but a fresh look that fits your style. Here, every fade,
            trim, and shave is done with care and skill. You walk in for a cut,
            and leave feeling sharp, confident, and ready for anything.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-gray-100 py-16 px-6 md:px-20 text-center"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          data-aos="zoom-in"
        >
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <div className="text-5xl text-gray-800 mb-4 flex justify-center">
              <FaCut />
            </div>
            <p className="font-semibold text-gray-700">Precision Cuts</p>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <div className="text-5xl text-gray-800 mb-4 flex justify-center">
              <FaSmile />
            </div>
            <p className="font-semibold text-gray-700">Friendly Barbers</p>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <div className="text-5xl text-gray-800 mb-4 flex justify-center">
              <FaClock />
            </div>
            <p className="font-semibold text-gray-700">On-Time Appointments</p>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <div className="text-5xl text-gray-800 mb-4 flex justify-center">
              <HiOutlineSparkles />
            </div>
            <p className="font-semibold text-gray-700">
              Modern & Classic Styles
            </p>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section
        className="py-12 px-6 md:px-16 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Step into Empire Barber Cave and experience precision grooming at its
          best. Your look deserves the best care — visit us today.
        </p>

        <div
          className="w-full h-80 rounded-lg overflow-hidden shadow-md"
          data-aos="zoom-in-up"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7976.839628373717!2d37.265963488741335!3d-1.51707114446871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b9b8975973f%3A0xc0ebf688b5216ed3!2sChicken%20Inn%20Machakos!5e0!3m2!1sen!2ske!4v1761321866012!5m2!1sen!2ske"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
