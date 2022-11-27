import React from "react";

import Layanan from "./component/Layanan";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";


const App = () => {
  return (
    <>
      <Navbar />
      {/* <Detail/> */}
      <Routes>
        <Route path="layanan" element={<Layanan />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
