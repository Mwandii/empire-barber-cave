import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import AnimateOnScroll from "../components/AnimateOnScroll";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
          url('https://images.unsplash.com/photo-1695173122226-3a932002ab33?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1400')
        `,
      }}
    >
      {/* subtle gradient overlay for warmth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80" />

      <Navbar />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* Entire block fades/entrances */}
        <AnimateOnScroll
          className="max-w-3xl"
          enter="opacity-100 translate-y-0"
          exit="opacity-0 translate-y-6"
          duration={700}
          delay={0}
          threshold={0.12}
        >
          <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-600">
              Where Style
            </span>{" "}
            <span className="text-white/90">Meets</span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-400">
              Precision
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll
          className="mt-2"
          enter="opacity-100 translate-y-0"
          exit="opacity-0 translate-y-6"
          duration={800}
          delay={120}
        >
          <p className="font-raleway text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Indulge in the art of modern grooming. From precision cuts and flawless fades
            to revitalizing facials and massages — every service is crafted to help you
            look sharp and feel confident.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll
          className="mt-8"
          enter="opacity-100 translate-y-0"
          exit="opacity-0 translate-y-6"
          duration={900}
          delay={260}
        >
          <button
            onClick={() => navigate("/servicepage")}
            className="inline-flex items-center px-6 py-3 font-raleway font-semibold text-sm sm:text-base rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.12)] bg-linear-to-r from-yellow-500 to-yellow-600 text-black transition-transform duration-300 hover:-translate-y-1"
          >
            Explore Services
          </button>
        </AnimateOnScroll>
      </div>

      {/* soft bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-linear-to-t from-white/0 to-black/40" />
    </section>
  );
}

export default Hero;
