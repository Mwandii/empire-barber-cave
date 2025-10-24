import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
  <div>
    <div className="bg-black py-2 px-1">
      <Navbar />
    </div>

    <div>
      <img
        src="https://dailybarber.com/wp-content/uploads/Big-Als-Barbershop-Broomall-2.jpg"
        alt="Barber shop banner"
        className="w-full h-[60vh] object-cover"
      />
    </div>

    <section className="text-center py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Look good. Feel better
      </h2>
    </section>

    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-10">
      <img
        src="https://images.unsplash.com/photo-1589381855733-01bb5380dedf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
        alt="Our Story"
        className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
      />
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Empire Barber Cave is where clean cuts meet good vibes. We’re all about
          precision, confidence, and comfort — giving you more than just a
          haircut, but a fresh look that fits your style. Here, every fade, trim,
          and shave is done with care and skill. You walk in for a cut, and leave
          feeling sharp, confident, and ready for anything.
        </p>
      </div>
    </section>

    <section className="bg-gray-100 py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-4xl mb-3">✂️</div>
          <p className="font-semibold text-gray-700">Precision Cuts</p>
        </div>
        <div>
          <div className="text-4xl mb-3">😊</div>
          <p className="font-semibold text-gray-700">Friendly Barbers</p>
        </div>
        <div>
          <div className="text-4xl mb-3">⏰</div>
          <p className="font-semibold text-gray-700">On-Time Appointments</p>
        </div>
        <div>
          <div className="text-4xl mb-3">💈</div>
          <p className="font-semibold text-gray-700">Modern & Classic Styles</p>
        </div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Step into Empire Barber Cave and experience precision grooming at its
        best. Your look deserves the best care — visit us today.
      </p>
      <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7976.839628373717!2d37.265963488741335!3d-1.51707114446871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b9b8975973f%3A0xc0ebf688b5216ed3!2sChicken%20Inn%20Machakos!5e0!3m2!1sen!2ske!4v1761321866012!5m2!1sen!2ske"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <Footer />
  </div>
);

}

export default AboutPage;
