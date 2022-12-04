import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img-1.png"
import logo2 from "../assets/logo2.png"

const Register = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [umur, setUmur] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState({});
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegister({ nama, email, umur, password});

        axios.post(" https://mental-meds.up.railway.app/api/register", {
            nama: nama,
            email: email,
            umur: umur,
            password: password,
          }, {
          headers: {
              'Content-Type' : 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((result) => {
            console.log(result);
            console.log(result.data);
            alert("Registration Success")
            navigation("/login")
        })
        .catch(error => {
            console.log(error);
            alert("error");
        })
            
    };

    console.log(register);

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-gray-200 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <h1><Link to={"/homepage"} className="text-lg font-bold">Kembali ke Homepage</Link></h1>
                    <img src={img} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
                    <div className="w-full h-100">
                        <img className="mt-2" src={logo2} alt=""/>
                        <h1 className="text-2xl md:text-2xl font-bold leading-tight mt-8 text-center">REGISTER</h1>

                        <form onSubmit={handleSubmit} className="mt-6" method="POST">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input type="text" name="" id="name" placeholder="Masukan Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={nama} onChange={(e) => setNama(e.target.value)} autoFocus required></input>
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="email" placeholder="Masukan Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>
                            <div>
                                <label className="block text-gray-700">Umur</label>
                                <input type="number" name="" id="umur" placeholder="Masukan Umur" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value={umur} onChange={(e) => setUmur(e.target.value)} required></input>
                            </div>
                            
                            <div className="mt-2">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" id="password" placeholder="Masukan Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                    focus:bg-white focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            </div>

                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6" value="Register">Daftar</button>
                        </form>
                        <p className="mt-8">
                            Sudah punya akun? 
                            <Link to={"/login"} className="text-blue-500 hover:text-blue-700 font-semibold">
                            Login Disini
                            </Link>
                        </p>
                    </div>
                </div>
        </section>
    )
}

export default Register;