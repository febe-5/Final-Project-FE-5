import React from "react";
import { Link } from "react-router-dom";

export default function Layanan() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" text-black "type="button" onClick={() => setShowModal(true)}>Jadwalkan Konsultasi</button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-full bg-primary  ">
                <div className="flex items-start p-5 border-b border-solid">
                  <h3 className="text-3xl font-semibold  text-center text-green-100">Pilih Media</h3>
                  <button
                        className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration- text-end"
                        type="button"
                        onClick={() => setShowModal(false)}>X
                  </button>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl font-semibold  "
                    onClick={() => setShowModal(false)}>
                  </button>
                </div>
                
                <div className="flex flex-col items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <Link to="/ofline">
                        <button
                            className="bg-green-100 text-primary active:bg-emerald-600 font-bold uppercase text-sm px-10 py-3 rounded shadow hover:shadow-lg  mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}>Offline
                        </button>
                    </Link>
                    <p className="text-green-100 my-4">Atau</p>
                    <Link to="/about">
                        <button
                            className="bg-green-100 text-primary active:bg-emerald-600 font-bold uppercase text-sm px-11 py-3 rounded shadow hover:shadow-xl mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}>Online 
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}