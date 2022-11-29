import React from "react";


import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import About from "./component/About";
import Layanan from "./component/Layanan";
import Ofline from "./component/Ofline";



const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Layanan />} />
        <Route path="/ofline" element={<Ofline />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        
      </Routes>
    </>
  );
};

export default App;
