function About() {
  return (
    <section>
      <h1 className="font-black mx-4 mt-4 text-2xl">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-6xl mx-auto">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <img src="https://images.unsplash.com/photo-1643252824236-99080a322120?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJhcmJlciUyMHNob3AlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          className="rounded-lg shadow-2xl object-cover h-80 "
          />
        </div>
        <div className="md:w-1/2 md:pl-18 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">Redefining Grooming Excellence</h2>
          <p className="text-gray-700 mb-6">
            More than a cut — it’s a complete grooming experience. From sharp
            fades to relaxing scrubs, we perfect every detail so you leave
            looking and feeling your best
          </p>
          <button className="bg-black border border-yellow-600 text-yellow-600 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 hover:text-black hover:border-black hover:cursor-pointer transition-all duration-300">ABOUT US</button>
        </div>
      </div>
    </section>
  );
}

export default About;
