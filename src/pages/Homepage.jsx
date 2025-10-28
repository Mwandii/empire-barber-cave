import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutPage from "./AboutPage";


function Homepage() {
    return (
        <div className="fade-in">
        <Hero/>
        <About/>
        <Services/>
        <Footer/> 
        </div>
    )
}

export default Homepage;