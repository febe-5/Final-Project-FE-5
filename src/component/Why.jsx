import React from "react";
import Icon1 from "../assets/about/1.png";
import Icon2 from "../assets/about/2.png";
import Icon3 from "../assets/about/3.png";

const Why = () => {
  return (
    <>
      <div class="mt-32 pb-14 bg-meds bg-opacity-65 p-8">
        <div class="w-full px-4 pt-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h3 class="font-bold text-white text-sm mb-2 lg:text-lg">Why Choose Us?</h3>
            <h2 class="font-extrabold text-white text-2xl mb-4 lg:text-5xl">Kenapa Memilih Kami?</h2>
          </div>
        </div>
        <div class="container bg-secondary rounded-2xl px-4 flex flex-wrap justify-center xl:w-11/12 xl:mx-auto">
          <div className="mb-4 mt-4 p-4 md:w-1/3 hover:scale-105">
            <div className="flex justify-center">
              <div className="rounded-2xl shadow-lg bg-primary mx-8 lg:mx-4">
                <img className="mx-auto pt-8 md:items-center" width="100 lg:150" src={Icon2} alt="" />
                <div className="p-6 text-justify">
                  <h5 className="text-white text-lg mb-1 font-bold text-center lg:text-xl">Pelayanan Terbaik.</h5>
                  <p className="text-white text-xs font-normal mb-2 lg:text-sm">Memberikan Pelayanan terbaik kepada Pengguna sebagai fokus utama kami</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 mt-4 p-4 md:w-1/3 hover:scale-105">
            <div className="flex justify-center">
              <div className="rounded-2xl shadow-lg bg-primary mx-8 lg:mx-4">
                <img className="mx-auto pt-8 md:items-center" width="100" src={Icon1} alt="" />
                <div className="p-6 text-justify">
                  <h5 className="text-white text-lg mb-1 font-bold text-center lg:text-xl">Fleksibel</h5>
                  <p className="text-white text-xs font-normal mb-2 lg:text-sm">Waktu yang fleksibel menyesuaikan jadwal anda yang padat.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 mt-4 p-4 md:w-1/3 hover:scale-105">
            <div className="flex justify-center">
              <div className="rounded-2xl shadow-lg bg-primary mx-8 lg:mx-4 ">
                <img className="mx-auto pt-8 md:items-center" width="100" src={Icon3} alt="" />
                <div className="p-6 text-justify">
                  <h5 className="text-white text-lg mb-1 font-bold text-center lg:text-xl">Psikolog Profesional</h5>
                  <p className="text-white text-xs font-normal mb-2 lg:text-sm">Psikolog kami sudah bersertifikasi, Nasional maupun Internasional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
