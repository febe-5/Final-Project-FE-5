import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

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
      <div className="pt-6 pb-16 bg-teal-400 mt-10 w-11/12 ml-16 mr-14">
        <div className="container mx-auto mt-10">
          <div className=" px-4">
            <div className="max-w-xl mx-auto text-center mb-19 mt-10">
              {psikolog
                .filter((item) => item._id === id)
                .map((item) => {
                  return (
                    <div key={item._id} className="container p-4 rounded-2xl">
                      <h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">{item.nama}</h1>
                      <p className="font-normal text-meds dark:text-gray-400">{item.deskripsi}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
