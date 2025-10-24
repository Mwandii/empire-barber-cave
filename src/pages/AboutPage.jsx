import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div>
      <div className="bg-black py-2 px-1">
        <Navbar />
      </div>
      <div>
      <section>
        <div>
        <img src="https://dailybarber.com/wp-content/uploads/Big-Als-Barbershop-Broomall-2.jpg" />
        </div>
        </section>
        <section>
          <h2>Look good. Feel better</h2>
          <div>
          <img src="https://images.unsplash.com/photo-1589381855733-01bb5380dedf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lkZSUyMGJhcmJlciUyMHNob3AlMjB3ZWJzaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" />
          <div>
            <h2>Our Story</h2>
            <p>
              Empire Barber Cave is where clean cuts meet good vibes. We’re all
              about precision, confidence, and comfort — giving you more than
              just a haircut, but a fresh look that fits your style. Here, every
              fade, trim, and shave is done with care and skill. You walk in for
              a cut, and leave feeling sharp, confident, and ready for anything.
            </p>
          </div>
          </div>
          </section>
          <section>
            <h2>Why Choose Us</h2>
            <div>
              <p>Precision Cuts</p>
            </div>
            <div>
              <p>Friendly Barbers</p>
            </div>
            <div>
              <p>On-Time Appointments</p>
            </div>
            <div>
              <p>Modern & Classic Styles</p>
            </div>
          </section>
          <section>
            <h2>Visit Us</h2>
            <div>
              <p>
                Step into Empire Barber Cave and experience precision grooming
                at its best. Your look deserves the best care — visit us today.
              </p>
            </div>
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
          </div>
          <Footer/>
        </div>
  );
}

export default AboutPage;
