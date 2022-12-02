import React from "react";
import BG from "../assets/bg.jpg";
import Card from "./CardKlinik";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Klinik = () => {
  const [klinik, setKlinik] = useState([]);

  const getKlinik = async () => {
    try {
      let response = await axios.get("https://mental-meds.up.railway.app/api/klinik");
      setKlinik(response.data.dataKlinik);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getKlinik();
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-blue bg-green-100">
        <div className="mt-4 z-0 flex items-center justify-between relative max-w-full">
          <div className="">
            <img src={BG} alt="" />
          </div>
        </div>

        <div className="w-full px-4 pt-10 ">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h3 className="font-bold text-secondary text-4xl mb-2 lg:text-lg">Daftar Klinik & Rumah Sakit</h3>
            <h2 className="font-bold text-primary text-xl mb-4 lg:text-6xl">Kesehatan Mental</h2>
          </div>
        </div>
        <div className="div w-full px-4 mx-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {klinik.map((item, index) => {
            return <Card key={index} id={item._id} imgUrl={item.url_gambar} nama={item.nama} lokasi={item.lokasi} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Klinik;
