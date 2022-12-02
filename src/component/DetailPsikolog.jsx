import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Detail = () => {
  const { id } = useParams();

  const [psikolog, setPsikolog] = useState([]);

  const getPsikolog = async () => {
    try {
      let response = await axios.get("https://mental-meds.up.railway.app/api/psikolog");
      console.log();
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
      <div className="pt-6 pb-16 bg-teal-400 mt-5 w-11/12 mx-auto">
        <div className="container mx-auto mt-10">
          <div className="px-4">
            <div className="max-w-xl mx-auto text-center mb-19 mt-10">
              {psikolog
                .filter((item) => item._id === id)
                .map((item) => {
                  return (
                    <div key={item._id} className="block p-10 bg-green-100 rounded-3xl min-w-full ">
                      <div className="mb-10 font-bold tracking-tight text-black">
                        <img src={item.image_url} className="rounded-3xl" alt="Foto Psikolog" />
                      </div>
                      <h1 className="text-5xl font-bold tracking-tight text-black ">{item.nama_psikolog}</h1>
                      <h2 className="mt-5 text-base font-semibold tracking-tight text-black">{item.pendidikan}</h2>
                      <h2 className="mt-2 mb-5 text-base font-semibold text-black">{"Pengalaman (" + item.pengalaman + ")"}</h2>
                      <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">{item.deskripsi}</p>
                      <h2 className="py-1 mx-28 text-base font-semibold text-black border-slate-400 border-2 rounded-3xl">{"Harga: (" + item.harga + ")"}</h2>
                      <div className="flex justify-center mt-5">
                        <button className="rounded-lg bg-primary p-2 text-white text-lg font-semibold my-2 mx-20 text-center hover:opacity-70">{"Konsultasikan dengan: " + item.nama_psikolog}</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
