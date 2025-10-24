function Navbar() {
    return (
        <nav className="flex justify-between items-center text-white relative z-10">
            <h1 className="m-2 p-2 font-bold text-3xl hover:cursor-pointer">Empire <span className="text-yellow-500">Barber</span> Cave</h1>
            <div>
                <a className="m-2 p-2 border-b-2 border-transparent hover:border-white transition-all duration-300 font-semibold hover:cursor-pointer">About Us</a>
                <a className="m-2 p-2 border-b-2 border-transparent hover:border-white transition-all duration-300 font-semibold hover:cursor-pointer">Services</a>
            </div>
        </nav>
    )
}

export default Navbar;