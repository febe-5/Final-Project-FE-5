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

        <div className="pt-6 pb-16 bg-teal-400 mt-10 ">
            <div className="container ml-100 mt-10">
                <div className=" px-4">
                    <div className="max-w-xl mx-auto text-center mb-19 mt-10">
                    {details.filter((item) => item._id === id).map((item) => {
                        return (

                          
                          <div key={item._id} className="block p-10 bg-green-100 rounded-lg min-w-full ">
                                <div className="mb-10 font-bold tracking-tight text-black">
                                  <img src={item.url_gambar} alt="ini-gambar-guis"/>
                                </div>
                                
                                <h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">{item.nama}</h1>
                                <p className="font-normal text-gray-700 dark:text-gray-400 mb-10">{item.profil}</p>
                                <a href={'tel:' + item.no_telp} className="text-base font-semibold text-black bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out justify-center">Jadwalkan Konsultasi</a>
                                <div className="flex lg:flex-row justify-center mt-10">
                                  <a href={'mailto:' + item.email}  className="w-12 h-12 mr-4 rounded-full flex justify-center items-center border border-slate-300 hover:border-red-500 hover:bg-red-500 hover:text-white text-slate-300">
                                    <svg role="img" width="26" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mail.Ru</title><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"/></svg>
                                  </a>
                                  <a href={'tel:' + item.no_telp} className="w-12 h-12 mr-4 rounded-full flex justify-center items-center border border-slate-300 hover:border-green-400 hover:bg-green-400 hover:text-white text-slate-300"> 
                                      <svg role="img" width="26" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                  </a>
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