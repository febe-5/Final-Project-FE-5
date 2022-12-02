import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailKlinik from "./component/Detail";
import DetailPsikolog from "./component/DetailPsikolog";
import Klinik from "./component/Klinik";
import Pembayaran from "./component/Pembayaran";
import Psikolog from "./component/Psikolog";
import About from "./pages/About";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";

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
				<Route path="/pembayaran/:id" element={<Pembayaran />} />
			</Routes>
		</>
	);
};

export default App;
