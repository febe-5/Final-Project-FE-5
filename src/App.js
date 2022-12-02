import React from "react";


import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import About from "./component/About";
import Konsultasi from "./component/Konsultasi";
import Ofline from "./component/Ofline";
import Layanan from "./component/Layanan";

import Footer from "./component/Footer";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Konsultasi />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/ofline" element={<Ofline />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer/>

    </>
  );
};

export default App;
