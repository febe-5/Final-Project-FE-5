import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto pl-0 pr-4 z-10">
        <Link to="/">
          <img src={Logo} alt="" className="block py-4" width="250" height="250" />
        </Link>
        <ul className="hidden md:flex">
          <Link to="/aboutBefore">
            <li className="p-4 hover:text-meds">Tentang Kami</li>
          </Link>
          <Link to="/layananBefore">
            <li className="p-4 hover:text-meds">Layanan</li>
          </Link>
          <Link to="/login">
            <li className="p-4 hover:text-meds">Artikel</li>
          </Link>
          <Link to="/login">
            <li className="text-base font-semibold text-white bg-secondary flex items-center mx-4 my-3 py-1 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Login</li>
          </Link>
        </ul>

        <div onClick={handleNav} className="fixed right-4 md:hidden">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-meds bg-white ease-in-out duration-500 md:hidden" : "fixed left-[-100%] top-0 h-full ease-in-out duration-500"}>
          <Link to="/">
            <img src={Logo} alt="" className="block py-4" width="260" height="260" />
          </Link>
          <ul className="pt-1">
            <Link to="/aboutBefore">
              <li className="px-6 py-4 hover:text-meds">Tentang Kami</li>
            </Link>
            <Link to="/layananBefore">
              <li className="px-6 py-4 hover:text-meds">Layanan</li>
            </Link>
            <Link to="/login">
              <li className="px-6 py-4 hover:text-meds">Artikel</li>
            </Link>
            <Link to="/login">
              <li className="text-base font-semibold text-white bg-secondary flex items-center ml-6 mr-28 my-3 py-1 px-7 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
