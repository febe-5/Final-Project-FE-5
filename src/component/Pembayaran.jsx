import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Pembayaran = () => {
	const { id } = useParams();

	const [psikolog, setPsikolog] = useState({});

	const [layanans, setLayanans] = useState([]);

	const [methods, setMethods] = useState([]);

	const [method, setMethod] = useState("");

	const days = [
		"senin",
		"selasa",
		"rabu",
		"kamis",
		"jum'at",
		"sabtu",
		"minggu",
	];

	const [jadwal, setJadwal] = useState("");

	const getPsikolog = async () => {
		try {
			let response = await axios.get(
				"https://mental-meds.up.railway.app/api/psikolog/" + id
			);
			setPsikolog(response.data.data);
			setLayanans(response.data.data.layanan);
		} catch (e) {
			console.log(e.message);
		}
	};

	const getMethods = async () => {
		try {
			let response = await axios.get(
				"https://mental-meds.up.railway.app/api/metode"
			);
			setMethods(response.data.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const postPembayaran = async (data) => {
		// jika login regis dah ada pake ini
		const token = localStorage.getItem("accessToken");

		// ini hanya untuk sementara
		// const token =
		// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg5MDhkZTQxMWM4YzYzZWE3MDNiODkiLCJuYW1hIjoiQWJpbCIsImVtYWlsIjoiYWJpbEBnbWFpbC5jb20iLCJpYXQiOjE2Njk5ODA2MTd9.4A9B9eyxgqa9fZ8xeZF8mFAb2CDYf4AoTXs5eOS6pZY";
		const response = await axios.post(
			"https://mental-meds.up.railway.app/api/pembayaran",
			{
				...data,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: token,
				},
			}
		);

		if (response.data.status == "success") {
			alert("pembayaran sukses");
		}
	};

	useEffect(() => {
		getPsikolog();
		getMethods();
	}, []);

	return (
		<>
			<Navbar />
			<div className="pt-6 pb-16 bg-teal-400 mt-5 ">
				<div className="container ml-100 mt-10">
					<div className=" px-4">
						<div className="max-w-xl mx-auto text-center mb-19 mt-10">
							<div
								key={psikolog._id}
								className="block p-10 bg-green-100 rounded-lg min-w-full "
							>
								<h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">
									{psikolog.nama_psikolog}
								</h1>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Pilih Jadwal
								</p>
								<select
									onChange={(e) => setJadwal(e.target.value)}
									name="jadwal"
									id="jadwal"
								>
									{days.map((day) => {
										return (
											<option key={day} value={day}>
												{day}
											</option>
										);
									})}
								</select>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									Pilih Metode Pembayaran
								</p>
								<select
									onChange={(e) => setMethod(e.target.value)}
									name="layanan"
									id="layanan"
								>
									{methods.map((e) => {
										return (
											<option key={e._id} value={e._id}>
												{e.nama}
											</option>
										);
									})}
								</select>
								<h4 className="mb-10 text-2xl font-bold tracking-tight text-black">
									Harga : Rp{psikolog.harga}
								</h4>
								<button
									onClick={() =>
										postPembayaran({
											id_psikolog: psikolog._id,
											jadwal,
											id_metode: method,
										})
									}
									className="text-base font-semibold text-black bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out justify-center"
								>
									Bayar Sekarang
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pembayaran;
