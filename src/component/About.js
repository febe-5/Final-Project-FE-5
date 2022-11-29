import React from 'react'
import About1 from '../assets/icon-about.png';
import About2 from '../assets/icon-about2.png';
import About3 from '../assets/icon-about3.png';
import Logo2 from "../assets/Frame.png";
import { Link } from "react-router-dom";


export const About = () => {
  return (
    <div>
        <div className="pt-6 pb-16 bg-teal-400 mt-10  ">
            <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                <div className= 'object-center ml-20 mr-20 w-11/12'>
                    <img src={About1} alt=" Not Found"/>
                </div>
                <div className='basis-auto object-center ml-20 mr-20'>
                    <h1 className='text-5xl font-extrabold text-green-100'>"Menyembuhkan luka mental itu lebih sulit dari pada menyembuhkan luka fisik"</h1>
                </div>
            </div>
        </div>

        <div className="pt-6 pb-16 bg-green-100">
            <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                <div className='basis-auto object-center ml-20 mr-20'>
                    <h1 className='text-5xl font-extrabold text-black mb-10'>Siapa Kami</h1>
                    <p className=' text-black text-lg'>
                    Mental-Meds merupakan sebuah platform penyedia layanan konsultasi psikologi secara online bersama para psikolog terpercaya. Platform ini berfokus pada kesehatan mental para remaja. Hal ini dikarenakan permasalahan kesehatan mental para remaja meningkat dua kali lipat selama pandemi.
                    </p>
                </div>
                <div className= 'object-center mr-20 ml-20 w-11/12'>
                    <img src={About2} alt=" Not Found"/>
                </div>
            </div>
        </div>

        <div className="pt-6 pb-16 bg-teal-400">
            <h1 className='text-center font-extrabold text-green-100 text-5xl'>Visi dan Misi</h1>
            <div>
                <div className='block p-10 bg-green-100 rounded-lg w-150 h-300 mt-10 mx-40 w'>
                    <h1 className='text-center font-extrabold text-teal-400 text-xl mb-10'>Visi</h1>
                    <p className=' text-teal-400 text-lg'>Sembuhkan penyakit mental sebelum Anda tahu!</p>
                </div>
            </div>
            <div>
                <div className='block p-10 bg-green-100 rounded-lg w-150 h-300 mt-10 mx-40 w-'>
                    <h1 className='text-center font-extrabold text-teal-400 text-xl mb-10'>Misi</h1>
                    <p className=' text-teal-400 text-lg'>1. Memberi informasi bahwa penyakit mental bukanlah penyakit remeh</p>
                    <p className=' text-teal-400 text-lg'>2. Memberikan pelayanan dengan kenyamanan</p>
                </div>
            </div>
        </div>

        <div className="pt-6 pb-16 bg-white">
            <div className="flex lg:flex-row mt-1 gap-5 items-center md : flex-col">
                <div className= 'object-center ml-20 mr-20 w-11/12'>
                    <img src={About3} alt=" Not Found"/>
                </div>

                <div className=' object-center mr-50 lg:mr-80'>
                    <h1 className='text-2xl font-extrabold text-black'>Yuk, jadwalkan sesi konseling online pertamamu</h1>
                    <div className="flex lg:flex-row mt-1 gap-10 items-center md : flex-col">
                        <div className= 'object-center w-max'>
                            <img src={Logo2} alt=" Not Found"/>
                        </div>
                        <div className='text-md ml-10'>
                            <p>1. Booking Cepat</p>
                            <p>2. Praktis</p>
                            <p>3. Terpercaya</p>
                        </div>
                    </div>
                    
                    <p className=' text-black text-lg'>
                    </p>
                    <Link to = "/LayananOnline">
                        <button className="bg-secondary  hover:bg-green-100 hover:text-primary text-white font-bold py-2 px-4 rounded-full">
                        Selengkapnya
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
