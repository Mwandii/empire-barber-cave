import Navbar from "./Navbar";

function Hero() {
    return (
        <section className="relative h-[400px] bg-cover bg-center"
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
            url('https://images.unsplash.com/photo-1695173122226-3a932002ab33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870')`}}
        >
            <Navbar/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-light px-10 lg:px-25">
                <h2 className="font-black font-cormorant text-4xl mt-10 text-yellow-500">Where Style Meets Precision</h2>
                <p className="font-light text-sm font-lato">Indulge in the art of modern grooming. From precision cuts and flawless fades to revitalizing facials, body scrubs, and massages — every service is crafted to help you look sharp, feel refreshed, and carry yourself with confidence.</p>
            </div>
        </section>
    )
}

export default Hero;