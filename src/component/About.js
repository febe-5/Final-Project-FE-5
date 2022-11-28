import React from 'react'
import About1 from '../assets/icon-about.png';
import About2 from '../assets/icon-about2.png';
import About3 from '../assets/icon-about3.png';
import Logo from "../assets/logo.png";


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
                    <h1 className='text-center font-extrabold text-teal-400 text-lg mb-20'>Visi</h1>
                </div>
            </div>
            <div>
                <div className='block p-10 bg-green-100 rounded-lg w-150 h-300 mt-10 mx-40 w-'>
                    <h1 className='text-center font-extrabold text-teal-400 text-lg mb-20'>Misi</h1>
                </div>
            </div>
        </div>

        <div className="pt-6 pb-16 bg-green-100">
            <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                <div className= 'object-center ml-20 mr-20 w-11/12'>
                    <img src={About3} alt=" Not Found"/>
                </div>
                <div className='basis-auto object-center ml-20 mr-20'>
                    <h1 className='text-2xl font-extrabold text-black mr-10'>Yuk, jadwalkan sesi konseling online pertamamu</h1>
                    <div className= 'object-center mr-40 w-3/6 '>
                        <img src={Logo} alt=" Not Found"/>
                    </div>
                    <p className=' text-black text-lg'>
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
