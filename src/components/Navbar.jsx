function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <h1 className="m-2 p-1 font-bold text-2xl">Empire <span className="text-yellow-500">Barber</span> Cave</h1>
            <div>
                <a className="m-2 p-1 font-semibold">About Us</a>
                <a className="m-2 p-1 font-semibold">Services</a>
            </div>
        </nav>
    )
}

export default Navbar;