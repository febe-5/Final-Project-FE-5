import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import YesNo from "./YesNo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [showYesNo, setShowYesNo] = useState(false);

  const handleOnClose = () => setShowYesNo(false);

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto pl-0 pr-4 z-10">
        <Link to="/homeLogin">
          <img src={Logo} alt="" className="block py-4" width="250" height="250" />
        </Link>
        <ul className="hidden md:flex">
          <Link to="/aboutLogin">
            <li className="p-4 hover:text-meds">Tentang Kami</li>
          </Link>
          <Link to="/layananLogin">
            <li className="p-4 hover:text-meds">Layanan</li>
          </Link>
          <Link to="/blog">
            <li className="p-4 hover:text-meds">Artikel</li>
          </Link>
          <button>
            <li
              onClick={() => setShowYesNo(true)}
              className="text-base font-semibold text-secondary bg-white border-secondary border-2 flex items-center mx-4 my-3 py-1 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Logout
            </li>
          </button>
        </ul>

        <div onClick={handleNav} className="fixed right-4 md:hidden">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-meds bg-white ease-in-out duration-500 md:hidden" : "fixed left-[-100%] top-0 h-full ease-in-out duration-500"}>
          <Link to="/homeLogin">
            <img src={Logo} alt="" className="block py-4" width="260" height="260" />
          </Link>
          <ul className="pt-1">
            <Link to="/about">
              <li className="px-6 py-4 hover:text-meds">Tentang Kami</li>
            </Link>
            <Link to="/layanan">
              <li className="px-6 py-4 hover:text-meds">Layanan</li>
            </Link>
            <Link to="/blog">
              <li className="px-6 py-4 hover:text-meds">Artikel</li>
            </Link>
            <li
              onClick={() => setShowYesNo(true)}
              className="text-base font-semibold  text-secondary bg-white border-secondary border-2 flex items-center ml-6 mr-28 my-3 py-1 px-7 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      <YesNo onClose={handleOnClose} visible={showYesNo} />
    </>
  );
};

export default Navbar;
