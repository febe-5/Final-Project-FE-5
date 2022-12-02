import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";

const Psikolog = () => {
  const [psikolog, setPsikolog] = useState([]);

  const getPsikolog = async () => {
    try {
      let response = await axios.get("https://mental-meds.up.railway.app/api/psikolog");
      setPsikolog(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPsikolog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full pt-5 bg-slate-100">
        <div className="container border-4 border-mental mx-auto mt-2 p-10 rounded-3xl bg-secondary p-0 lg:rounded-full">
          <div className="flex flex-wrap justify-center">
            <div className="w-full mt-6 lg:w-1/2">
              <div className="container flex flex-wrap p-10">
                <div className="mx-auto p-4 lg:mb-4">
                  <div className="flex justify-center">
                    <div className="rounded-2xl border-4 border-white shadow-lg bg-primary ">
                      <img className="mx-auto p-8 rounded-full hover:scale-105 md:items-center" width="400" src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto mb-8 lg:mt-28 px-20 lg:w-1/2">
              <h1 className="text-base font-semibold text-white md:text-xl">
                Temukan
                <span className="block font-extrabold text-white text-5xl pt-1 lg:text-7xl">Psikolog Profesional</span>
              </h1>
              <p className="font-semibold text-lg text-white mb-8">Kami di sekitar anda!</p>
            </div>
          </div>
        </div>

        <div className="div w-full pt-10 px-4 mx-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {psikolog.map((item, index) => {
            return <Card key={index} _id={item._id} imgUrl={item.image_url} nama={item.nama_psikolog} pendidikan={item.pendidikan} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Psikolog;
