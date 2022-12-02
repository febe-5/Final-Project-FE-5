import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Detail = () => {
  const { id } = useParams();

  const navigation = useNavigate();

  const [psikolog, setPsikolog] = useState({});

  const getPsikolog = async () => {
    try {
      let response = await axios.get("https://mental-meds.up.railway.app/api/psikolog/" + id);
      console.log();
      setPsikolog(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleClick = (id) => {
    navigation("/pembayaran/" + id);
  };

  useEffect(() => {
    getPsikolog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-6 pb-16 bg-teal-400 mt-5 ">
        <div className="container ml-100 mt-10">
          <div className=" px-4">
            <div className="max-w-xl mx-auto text-center mb-19 mt-10">
              <div key={psikolog._id} className="block p-10 bg-green-100 rounded-lg min-w-full ">
                <div className="mb-10 font-bold tracking-tight text-black">
                  <img src={psikolog.image_url} alt="ini-gambar-guis" />
                </div>

                <h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">{psikolog.nama_psikolog}</h1>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-10">{psikolog.deskripsi}</p>
                <h4 className="mb-10 text-2xl font-bold tracking-tight text-black">Harga : Rp{psikolog.harga}</h4>
                <button onClick={() => handleClick(id)} className="text-base font-semibold text-black bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out justify-center">
                  Jadwalkan Konsultasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
