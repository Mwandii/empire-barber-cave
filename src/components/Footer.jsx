import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        <section className="flex flex-col justify-between bg-black text-gray-700 font-light p-14">
        <div className="flex items-center justify-evenly text-sm mb-6">
            <div className="flex items-center"><MdLocationOn className="mr-2"/><p>Machakos</p></div>
            <div className="flex items-center"><FaPhone className="mr-2"/><p>+254712345678</p></div>
            <div className="flex items-center"><SiGmail className="mr-2"/><p>johndoe@gmail.com</p></div>
        </div>
        <p className="text-center text-xs mt-6 font-thin">copyright &copy; 2025 Empire Barber Cave. All rights reserved.</p>
        </section>
    )
}

export default Footer;