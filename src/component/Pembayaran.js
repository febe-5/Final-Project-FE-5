
import React from 'react'
import { Link } from "react-router-dom";
import Bank from '../assets/bank1.png';
import Bank2 from '../assets/bank2.png';
import Bank3 from '../assets/bank3.jpg';

const Pembayaran = () => {
    const pembayaran = [
        {
          paket : "Paket Teman",
          media : "Call Only",
          waktu : "2 Jam konseling",
          harga : "500.000"
        },
        {
            paket : "Paket Curhat",
            media : "Video call ",
            waktu : "2 Jam konseling",
            harga : "500.000"
          },
          {
            paket : "Paket Healing",
            media : "Video call",
            waktu : "2 Jam konseling",
            harga : "500.000",
            bonus : "test Psikolog"
          },
          {
            paket : "Paket Serius",
            media : "Video call",
            waktu : "2 Jam konseling",
            harga : "500.000"
          }
      ]
    return (
        <>
            <div className="pt-6 pb-16 bg-teal-400">
                <h1 className='text-center font-extrabold text-green-100 text-3xl'>Pilih daftar paketnya yuk guis</h1>
            </div>

            <div className='pt-6 pb-16 bg-white'>
                <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-20">
                  {pembayaran.map((items) => (
                    <div>
                      <div  className="w-full rounded-lg bg-green-300 shadow-md lg:max-w-sm hover:bg-green-300 hover:shadow-lg" key={items._id} style={{}}>
                        <div className='p-4'>
                          <h3 className="text-xl font-bold text-black text-center mt-5 py-5 px-5 bg-white">{items.paket}</h3>
                        </div>
                        <div className='p-10'>
                          <p className="text-xl font-bold text-black text-center mt-5 py-5 px-5 bg-white">{items.media}</p>
                          <p className="text-xl font-bold text-black text-center py-5 px-5 bg-white">{items.waktu}</p>
                          <p className="text-xl font-bold text-black text-center mt-5 py-5 px-5 bg-white rounded-lg">{items.harga}</p>
                        </div>
                        <div>
                          <Link to = "/mediaPembayaran">
                            <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center">
                              Pilih
                            </button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
            </div>

            <div className="pt-6 pb-16 bg-teal-400">
                <h1 className='text-center font-extrabold text-green-100 text-3xl'>Metode pembayaran</h1>
            </div >
            <div className='pt-6 pb-16 bg-white '>
              <div className="grid cols lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 my-20 gap-5 mx-20">
                <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                  <p>Bank Transfer</p>
                    <Link to = "/mediaPembayaran">
                      <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                         Pilih
                       </button>
                    </Link>

                    <div className="flex lg:flex-row mt-1 gap-10 items-center md : flex-col">
                        <div className= 'object-center w-max mt-5'>
                            <img src={Bank} alt=" Not Found"/>
                            <p className='text-center mt-5'>Bayar melalui ATM, Internet Banking dan Mobile Banking manapun di Indonesia ke rekening bank BRI.</p>
                        </div>
                    </div>

                </div>
                <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                  <p>Bank Virtual Account</p>
                  <Link to = "/mediaPembayaran">
                    <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                        Pilih
                    </button>
                  </Link>
                  <div className="flex lg:flex-row mt-1 gap-10 items-center md : flex-col">
                        <div className= 'object-center w-max mt-5'>
                            <img src={Bank2} alt=" Not Found"/>
                            <p className='text-center mt-5'>Bayar melalui virtual account masing-masing bank</p>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                  <p>Dompet digital</p>
                  <Link to = "/mediaPembayaran">
                    <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                      Pilih
                    </button>
                  </Link>
                  <div className="flex lg:flex-row mt-1 gap-10 items-center md : flex-col">
                        <div className= 'object-center w-max mt-5'>
                            <img src={Bank3} alt=" Not Found"/>
                            <p className='text-center mt-5'>Bayar melalui dompet digitalmu yes!!</p>
                        </div>
                    </div>
                </div>
              </div>


              <div className='justify-center'>
                <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                <div className="flex lg:flex-row mt-1 gap-10 items-center md : flex-col">
                        <div className= 'object-center w-max'>
                        <table className="table-auto font-bold">
                          <tbody className='ml-20'>
                            <tr>
                              <td>Biaya Paket</td>
                              <td >RP.150.000</td>
                            </tr>
                            <tr>
                              <td>Biaya administrasi</td>
                              <td className='text-green-500 ml-10'>Gratis</td>
                            </tr>
                            <tr className='mt-10'>
                              <td>Total Harga</td>
                              <td>RP.150.000</td>
                            </tr>
                          </tbody>
                        </table> 

                        <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                          Bayar
                        </button>
                        </div>

                    </div>
                </div>
              </div>

              </div>
              

            {/* <div>
              <div className="pt-6 pb-16 bg-white">
                <h1 className='text-center font-extrabold text-black text-xl'>Pilih Metode pembayaran</h1>
                <div className="flex lg:flex-row mt-20 gap-20 items-left md : flex-col">
                
                <div className='pt-6 pb-16'>
                
                  <div className="grid cols lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ml-20 mr-20 mt-10 mb-10 gap-3">
                    <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                      <p>Bank Transfer</p>
                        <Link to = "/mediaPembayaran">
                          <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                            Pilih
                          </button>
                        </Link>
                    </div>

                    <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                      <p>Bank Virtual Account</p>
                        <Link to = "/mediaPembayaran">
                          <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                            Pilih
                          </button>
                        </Link>
                    </div>
                  
                    <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                      <p>Dompet digital</p>
                        <Link to = "/mediaPembayaran">
                          <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-20">
                            Pilih
                          </button>
                        </Link>
                    </div>

                  </div>
                </div>
                </div>
              </div> */}
            
            
              {/* <div>
                <div className= 'object-center mt-20 mr-20'>
                  <div className="w-full rounded-lg bg-white shadow-md lg:max-w-sm hover:shadow-lg outline outline-black outline-15 py-10 px-10">
                    <p>Biaya Paket </p>
                    <div>
                      <p>biaya</p>
                    </div>
                      <Link to = "/mediaPembayaran">
                        <button className="bg-green-500  hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded-full items-center mt-16">
                          Pilih
                        </button>
                      </Link>
                  </div>
                </div>
            </div> */}
                 
          {/* </div> */}
            
      </>
    )}

    export default Pembayaran
