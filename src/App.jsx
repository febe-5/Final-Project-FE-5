import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Layanan from "./pages/Layanan";
import DetailPsikolog from "./component/DetailPsikolog";
import DetailKlinik from "./component/Detail";
import Psikolog from "./component/Psikolog";
import Klinik from "./component/Klinik";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="/detailPsikolog/:id" element={<DetailPsikolog />} />
        <Route path="/detail/:id" element={<DetailKlinik />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/klinik" element={<Klinik />} />
      </Routes>
    </>
  );
};

export default App;
