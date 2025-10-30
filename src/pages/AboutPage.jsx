import AnimateOnScroll from "../components/AnimateOnScroll";
import { FaClock, FaCut, FaSmile } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div className="bg-[#f9f8f6] text-gray-800 font-raleway animate-fadeIn">
      {/* Navbar */}
      <div className="bg-black py-2 px-1 shadow-md">
        <Navbar />
      </div>

      {/* Hero Banner */}
      <AnimateOnScroll>
        <div className="relative w-full h-[45vh]">
          <img
            src="https://dailybarber.com/wp-content/uploads/Big-Als-Barbershop-Broomall-2.jpg"
            alt="Barber shop banner"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-white drop-shadow-2xl tracking-wide">
              Empire Barber Cave
            </h1>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Headline */}
      <AnimateOnScroll className="text-center py-12" delay={50}>
        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gray-900">
          Look good. Feel better.
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-700 mt-5 max-w-xl mx-auto leading-relaxed">
          Precision grooming crafted with care, confidence, and creativity.
        </p>
      </AnimateOnScroll>

      {/* Our Story */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-16 bg-white shadow-sm">
        <AnimateOnScroll className="w-full md:w-1/2" delay={100}>
          <img
            src="https://images.unsplash.com/photo-1589381855733-01bb5380dedf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Our Story"
            className="w-full rounded-xl shadow-lg object-cover border border-yellow-100"
          />
        </AnimateOnScroll>

        <AnimateOnScroll className="md:w-1/2 text-center md:text-left" delay={200}>
          <h2 className="text-2xl font-cinzel font-semibold mb-4 text-gray-900">
            Our Story
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mb-5 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-700 leading-relaxed">
            Empire Barber Cave is where clean cuts meet good vibes. We’re all
            about precision, confidence, and comfort — giving you more than just
            a haircut, but a fresh look that fits your style. Each fade, trim,
            and shave is done with care and skill. You walk in for a cut and
            leave feeling sharp, confident, and ready for anything.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f8f6] py-16 px-6 md:px-20 text-center border-t border-gray-200">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12 rounded-full"></div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[ 
            { icon: <FaCut />, label: "Precision Cuts" },
            { icon: <FaSmile />, label: "Friendly Barbers" },
            { icon: <FaClock />, label: "On-Time Appointments" },
            { icon: <HiOutlineSparkles />, label: "Modern & Classic Styles" },
          ].map((item, i) => (
            <AnimateOnScroll key={i} delay={80 * (i + 1)}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-yellow-100 hover:border-yellow-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl text-yellow-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-900">{item.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 px-6 md:px-16 text-center bg-white border-t border-gray-200">
        <AnimateOnScroll delay={180}>
          <h2 className="text-3xl font-cinzel font-bold mb-4 text-gray-900">
            Visit Us
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Step into Empire Barber Cave and experience precision grooming at its
            best. Your look deserves the finest care — visit us today.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={260}>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-yellow-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7976.839628373717!2d37.265963488741335!3d-1.51707114446871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b9b8975973f%3A0xc0ebf688b5216ed3!2sChicken%20Inn%20Machakos!5e0!3m2!1sen!2ske!4v1761321866012!5m2!1sen!2ske"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
