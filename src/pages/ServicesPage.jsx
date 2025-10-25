import Navbar from "../components/Navbar";

function ServicesPage() {
    return (
        <>
        <div className="bg-black py-2">
        <Navbar/>
        </div>
       <div className="flex justify-center px-2 sm:px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full justify-items-center">

    <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-10/12 sm:w-64 md:w-72">
      <img
        className="rounded-t-2xl w-full h-44 object-cover"
        src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg"
        alt="Haircut"
      />
      <button className="px-4 py-2 my-4 rounded-lg text-lg font-bold bg-black text-yellow-500 hover:bg-yellow-400 hover:text-white transition">
        Hair Services
      </button>
    </div>

    <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-10/12 sm:w-64 md:w-72">
      <img
        className="rounded-t-2xl w-full h-44 object-cover"
        src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg"
        alt="Facial"
      />
      <button className="px-4 py-2 my-4 rounded-lg text-lg font-bold bg-yellow-500 hover:bg-yellow-600 transition">
        Facial & Skin Care
      </button>
    </div>

    <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-10/12 sm:w-64 md:w-72">
      <img
        className="rounded-t-2xl w-full h-44 object-cover"
        src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg"
        alt="Nails"
      />
      <button className="px-4 py-2 my-4 rounded-lg text-lg font-bold bg-yellow-500 hover:bg-yellow-600 transition">
        Nail Services
      </button>
    </div>

    <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-10/12 sm:w-64 md:w-72">
      <img
        className="rounded-t-2xl w-full h-44 object-cover"
        src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg"
        alt="Massage"
      />
      <button className="px-4 py-2 my-4 rounded-lg text-lg font-bold bg-yellow-500 hover:bg-yellow-600 transition">
        Massage & Body Services
      </button>
    </div>

  </div>
</div>




 
        </>
    )
}

export default ServicesPage;