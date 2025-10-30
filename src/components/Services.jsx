import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";

function Services() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between bg-white text-black px-8 md:px-16 py-20 gap-12">
      {/* Image Side */}
      <AnimateOnScroll
        className="relative md:w-1/2"
        enter="opacity-100 translate-x-0"
        exit="opacity-0 translate-x-10"
        duration={700}
        delay={100}
      >
        <img
          src="https://images.unsplash.com/photo-1520336811552-42878b67d25f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800"
          alt="Grooming tools"
          className="w-full h-80 object-cover rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent rounded-lg"></div>
      </AnimateOnScroll>

      {/* Text Side */}
      <AnimateOnScroll
        className="md:w-1/2 text-center md:text-left"
        enter="opacity-100 translate-x-0"
        exit="opacity-0 -translate-x-10"
        duration={700}
        delay={0}
      >
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-yellow-600">
          Our Services
        </h2>
        <p className="font-raleway text-gray-600 mb-6 leading-relaxed">
          Every cut and treatment is guided by precision and passion. From clean fades
          and beard detailing to full grooming sessions — we bring craftsmanship to every
          detail, ensuring you always look and feel your best.
        </p>
         <button
          onClick={() => navigate("/servicepage")}
          className="relative inline-block px-8 py-3 text-sm sm:text-base font-semibold tracking-wide border border-yellow-600 text-yellow-600 rounded-full overflow-hidden transition-all duration-500 group"
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

export default Services;
