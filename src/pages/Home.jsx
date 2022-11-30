import React, { useState } from "react";
import Landing from "../assets/icon.png";
import Navbar from "../component/Navbar";
import Why from "../component/Why";
import Psikolog from "../component/Psikolog";
import Footer from "../component/Footer";
import PopUp from "../component/PopUp";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleOnClose = () => setShowPopUp(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <div className="w-full mt-6 lg:mt-28 px-20 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Selamat Datang di
            <span className="block font-extrabold text-5xl lg:text-7xl">
              <span className="text-mental">Mental</span>
              <span className="text-meds"> Meds</span>
            </span>
          </h1>
          <p className="font-normal text-slate-700 mb-8 leading-relaxed">Sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi.</p>
          <button onClick={() => setShowPopUp(true)} className="text-sm font-semibold text-white bg-secondary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
            Jadwalkan Konsultasi
          </button>
        </div>
        <div className="w-full self-end lg:right-0 lg:w-1/2">
          <div className="mt-10 lg:mt-6">
            <img width="420" src={Landing} alt="Gambar" className="max-w-full mx-auto lg:mx-44" />
          </div>
        </div>
      </div>
      <Why />
      <Psikolog />
      <PopUp onClose={handleOnClose} visible={showPopUp} />
      <Footer />
    </>
  );
};

export default Home;
