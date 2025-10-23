import Navbar from "./Navbar";

function Hero() {
    return (
        <section className="relative h-[400px] bg-cover bg-center"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1695173122226-3a932002ab33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870')"}}
        >
            {/* Dark Overlay on hero */}
            <div className="absolute inset-0 bg-black/50"></div>
            <Navbar/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h2 className="font-bold text-2xl p-2">Where Style Meets Precision</h2>
                <p className="">Indulge in the art of modern grooming. From precision cuts and flawless fades to revitalizing facials, body scrubs, and massages — every service is crafted to help you look sharp, feel refreshed, and carry yourself with confidence.</p>
            </div>
        </section>
    )
}

export default Hero;