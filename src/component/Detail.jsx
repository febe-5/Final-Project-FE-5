import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Detail = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    try {
      let response = await axios.get("http://13.212.29.212:3000/api/klinik");
      console.log();
      setDetails(response.data.dataKlinik);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

return (
    <>

        <div className="pt-6 pb-16 bg-teal-400 mt-10 w-11/12 ml-16 mr-14 ">
            <div className="container ml-100 mt-10">
                <div className=" px-4">
                    <div className="max-w-xl mx-auto text-center mb-19 mt-10">
                    {details.filter((item) => item._id === id).map((item) => {
                        return (
                            <div key={item._id} className="block p-10 bg-white rounded-lg w-150 h-300 mt-10">
                                <div className="mb-10 font-bold tracking-tight text-black"><img src={item.url_gambar} alt="ini-gambar-guis"/></div>
                                
                                <h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">{item.nama}</h1>
                                <p className="font-normal text-gray-700 dark:text-gray-400 mb-10">{item.profil}</p>
                                <a href={item.no_telp} className="text-base font-semibold text-black bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mb">Jadwalkan Konsultasi</a>
                                <div className="bg-teal-400 mt-10 rounded-xl mx-20">
                                  <p className="mb-10 text-2xl font-bold tracking-tight text-black mt-11">Kontak Kami</p>
                                  <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">{item.no_telp}</p>
                                  <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">{item.email}</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Detail;