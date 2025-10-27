import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12  mx-auto mt-12">
  <div className="relative md:w-1/2 md:order-1">
    <img
      src="https://images.unsplash.com/photo-1732314287829-f1da598a5b77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyJTIwc2hvcCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
      alt="Barber tools"
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-l from-white via-transparent to-transparent"></div>
  </div>
  <div className="md:w-1/2 md:order-2 text-center md:text-left md:pl-12">
    <h2 className="text-3xl font-bold mb-4 mt-4">About Us</h2>
    <p className="text-gray-700 mb-6">
      From classic cuts to modern fades, every service is delivered with
      precision, skill, and attention to detail. We combine timeless techniques
      with contemporary style to give you a look that defines confidence.
    </p>
    <button onClick={() => navigate('/aboutpage')} className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
      About Us
    </button>
  </div>
</section>

  );
}

export default About;
