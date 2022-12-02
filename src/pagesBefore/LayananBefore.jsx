import React from "react";
import Navbar from "../component/NavbarBefore";
import { useEffect, useState } from "react";
import axios from "axios";
import About4 from "../assets/about/icon-about4.png";
import About5 from "../assets/about/icon-about5.png";
import About6 from "../assets/about/icon-about6.png";
import About7 from "../assets/about/icon-about7.png";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const Layanan = () => {
  const [layanan, setLayanan] = useState([]);

  const getLayanan = async () => {
    try {
      let response = await axios.get("https://mental-meds.up.railway.app/api/layanan");
      console.log(response.data);
      setLayanan(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getLayanan();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="pt-6 pb-6 bg-teal-400">
        <h1 className="text-center font-extrabold text-green-100 text-3xl">Layanan Kami mendukung Masyarakat Lebih Sehat Mental! </h1>
      </div>

      <div className="pt-6 pb-16 bg-green-100">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-20 ">
          {layanan.map((items) => (
            <div>
              <div className="w-full rounded-lg bg-teal-400 shadow-md lg:max-w-sm hover:bg-green-300 hover:shadow-lg" key={items._id} style={{}}>
                <div className="p-4">
                  {/* <img src={items.gmbr} alt="belom ada" /> */}
                  <h3 className="text-xl font-bold text-sky-600 text-center mt-5 py-10 px-10">{items.nama_layanan}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 pb-16 bg-white">
          <div className="flex lg:flex-row mt-20 gap-20 items-left md : flex-col">
            <div className="basis-auto object-center ml-20 mr-20">
              <h1 className="text-xl font-extrabold text-black mb-10">Kenapa harus percaya layanan kami?</h1>
              <div className=" text-black text-lg bg-stone-100 py-10 px-10">
                <p>1. Psikologi yang dipilih sudah profesional dan memiliki pengalaman lebih dari 5 tahun </p>
                <p>2. Layanan sampai pra-layanan yang memuaskan</p>
                <p>3. Privasi kamu tetap terjaga</p>
                <p>4. Menemani kamu yang merasa kesepian</p>
              </div>
            </div>
            <div className="object-center mr-20 ml-20">
              <img src={About4} alt=" Not Found" />
              <img src={About5} alt=" Not Found" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-6 pb-16 bg-teal-300">
          <h1 className="text-center font-extrabold text-black text-xl">Proses Konseling sesuai pilihan</h1>
          <div className="flex lg:flex-row mt-20 gap-20 items-left md : flex-col">
            <div className="basis-auto object-center mx-20">
              <h1 className="text-xl font-extrabold text-black mb-10">Kenapa harus percaya layanan kami?</h1>
              <div className=" text-lg">
                <p className="text-xl font-bold">1. Konseling Online</p>
                <p className="my-7">
                  Kami menyediakan layanan konseling secara lengkap untuk permasalahan individu maupun pasangan. kami menawarkan konseling via <span className="text-green-800 font-bold">Voice Call / Video Call</span>
                </p>

                <button className="bg-green-100  hover:bg-secondary hover:text-green-100 text-primary font-bold py-2 px-4 rounded-full" onClick={() => navigate("/login")}>
                  Jadwalkan Konsultasi Online
                </button>

                <div className="object-center mt-4">
                  <img src={About7} alt=" Not Found" />
                </div>
              </div>
            </div>
            <div>
              <div className="object-center mt-4">
                <img src={About6} alt=" Not Found" />
              </div>
              <div className="mt-6 text-lg">
                <p className="text-xl font-bold">2. Konseling Offline</p>
                <p className="my-7">Kami menawarkan konseling di tempat yang aman dan nyaman yang terletak di MS Wellbeing Center</p>

                <button className="bg-green-100  hover:bg-secondary hover:text-green-100 text-primary font-bold py-2 px-4 rounded-full" onClick={() => navigate("/login")}>
                  Jadwalkan Konsultasi Offline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layanan;
