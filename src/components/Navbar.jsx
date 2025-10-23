function Navbar() {
    return (
        <nav className="flex justify-between items-center text-white relative z-10">
            <h1 className="m-2 p-2 font-bold text-2xl hover:cursor-pointer">Empire <span className="text-yellow-500">Barber</span> Cave</h1>
            <div>
                <a className="m-2 p-1 font-semibold">About Us</a>
                <a className="m-2 p-1 font-semibold">Services</a>
            </div>
        </nav>
    )
}

export default Navbar;