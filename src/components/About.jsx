import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";

function About() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black px-8 md:px-16 py-20 gap-12">
      {/* Image Section */}
      <AnimateOnScroll
        className="relative md:w-1/2"
        enter="opacity-100 translate-x-0"
        exit="opacity-0 -translate-x-8"
        duration={800}
        delay={0}
      >
        <div className="overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1732314287829-f1da598a5b77?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Barber tools"
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </AnimateOnScroll>

      {/* Text Section */}
      <AnimateOnScroll
        className="md:w-1/2 text-center md:text-left max-w-lg"
        enter="opacity-100 translate-x-0"
        exit="opacity-0 translate-x-8"
        duration={800}
        delay={150}
      >
        <h2 className="font-cinzel text-3xl md:text-4xl text-yellow-600 font-bold mb-4">
          About Us
        </h2>

        <p className="font-raleway text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
          From classic cuts to modern fades, every service is delivered with precision,
          skill, and attention to detail. We blend timeless techniques with modern style
          to give you a look that defines confidence.
        </p>

        <button
          onClick={() => navigate("/aboutpage")}
          className="relative inline-block px-8 py-3 text-sm sm:text-base font-semibold hover:cursor-pointer tracking-wide border border-yellow-600 text-yellow-600 rounded-full overflow-hidden transition-all duration-500 group"
        >
          <span
            className="absolute inset-0 bg-linear-to-r from-yellow-500 to-yellow-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            aria-hidden
          />
          <span className="relative z-10">Learn More</span>
        </button>
      </AnimateOnScroll>
    </section>
  );
}

export default About;
