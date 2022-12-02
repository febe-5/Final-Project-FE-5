import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action/userAction";
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import img from "../assets/img-1.png"
import logo2 from "../assets/logo2.png"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigation = useNavigate();
    //console.log(state)

    // useEffect(() => {
    //     dispatch(getUser())
    // }, [])
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password });
      axios.post("https://group-project-2-be-5-production.up.railway.app/api/login", {
        email: email,
        password: password,
        }, {
          headers: {
              'Content-Type' : 'application/json',
            'Accept': 'application/json'
          }
      })
        .then((result) => {
            console.log(result.data)
          if(email == "" && password == ""){
            alert("Masukkan Email dan Password anda");
          } else if (result.data.status === "success"){
            alert(result.data.message);
              navigation("/blog");
              localStorage.setItem("accessToken", result.data.accessToken)
              localStorage.setItem("account", email);
          }
        })
        .catch(error => {
          alert(error.response.data.message);
          console.log(error.response.data.message)
        });
    };  

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
            <h1 className="text-2xl md:text-2xl font-bold leading-tight mt-12 text-center">LOGIN</h1>

            <form onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" name="" id="email" placeholder="Masukan Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required></input>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" name="" id="pwd" placeholder="Masukan Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                {/* <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Lupa Password?</a>
                </div> */}
                <button onClick={handleSubmit} type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6" value="Login">Log In</button>
            </form>
            <p className="mt-8">
              Belum punya akun? 
              <Link to={"/register"} className="text-blue-500 hover:text-blue-700 font-semibold">
                Daftar Disini
              </Link>
            </p>
        </div>
        
    </div>
</section>
    );
};

export default Login;