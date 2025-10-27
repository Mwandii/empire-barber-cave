import { Link, useNavigate } from "react-router-dom";

function Services() {

  const navigate = useNavigate();

    return (
       <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 mx-auto">
  <div className="md:w-1/2 md:order-1 text-center md:text-left md:pr-12 mr-4">
    <h2 className="text-3xl font-bold mb-4">Services</h2>
    <p className="text-gray-700 mb-6">
      Every cut and treatment is guided by precision and passion. We bring
      mastery to every style — ensuring you always look and feel your best.
    </p>
    <button onClick={() => navigate('/servicepage')} className="bg-yellow-500 mb-6 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
      Explore Services
    </button>
  </div>
  <div className="relative md:w-1/2 md:order-2">
    <img
      src="https://images.unsplash.com/photo-1695173122226-3a932002ab33?..."
      alt="Grooming tools"
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent"></div>
  </div>
</section>
    )
}

export default Services;