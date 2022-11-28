import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto pl-0 pr-4 z-10">
        <img src={Logo} alt="" className="block py-4" width="250" height="250" />
        <ul className="md:flex">
          <li className="p-4 hover:text-meds">Tentang Kami</li>
          <Link to={"/layanan"}>
            <li className="p-4 hover:text-meds">Layanan</li>
          </Link>
          <li className="p-4 hover:text-meds">Artikel</li>
          <Link to={"/about"}>
            <li className="p-4 hover:text-meds">About Us</li>
          </Link>
          
          <li className="text-base font-semibold text-white bg-secondary flex items-center mx-4 my-3 py-1 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Login</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
