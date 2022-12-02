import React from "react";
import HomeBefore from "./pagesBefore/HomeBefore";
import AboutBefore from "./pagesBefore/AboutBefore";
import LayananBefore from "./pagesBefore/LayananBefore";
import HomeLogin from "./pagesLogin/Home";
import AboutLogin from "./pagesLogin/About";
import LayananLogin from "./pagesLogin/Layanan";
import DetailPsikolog from "./component/DetailPsikolog";
import DetailKlinik from "./component/Detail";
import Psikolog from "./component/Psikolog";
import Klinik from "./component/Klinik";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import { Route, Routes } from "react-router-dom";
import Pembayaran from "./component/Pembayaran";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeBefore />} />
        <Route path="aboutBefore" element={<AboutBefore />} />
        <Route path="layananBefore" element={<LayananBefore />} />
        <Route path="homeLogin" element={<HomeLogin />} />
        <Route path="aboutLogin" element={<AboutLogin />} />
        <Route path="layananLogin" element={<LayananLogin />} />
        <Route path="/detailPsikolog/:id" element={<DetailPsikolog />} />
        <Route path="/detail/:id" element={<DetailKlinik />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/pembayaran/:id" element={<Pembayaran />} />
        <Route path="/klinik" element={<Klinik />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/articledetail/:slug" element={<ArticleDetail />} />
      </Routes>
    </>
  );
};

export default App;
