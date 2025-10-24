import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";

function Homepage() {
    return (
        <>
        <Hero/>
        <About/>
        <Services/>
        <Footer/> 
        </>
    )
}

export default Homepage;