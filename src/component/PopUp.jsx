import React from "react";
import { useNavigate } from "react-router-dom";

const PopUp = ({ visible, onClose }) => {
  if (!visible) return null;

  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="rounded-2xl shadow-lg bg-secondary ">
          <button onClick={onClose} className="pt-1 pr-3 text-white float-right">
            X
          </button>
          <div className="p-6 text-justify">
            <p className="m-2 text-2xl font-extrabold text-white">Opsi Konsultasi</p>
            <button className="rounded-lg bg-primary p-2 text-white text-lg my-2 font-semibold text-center mx-20" onClick={() => navigate("/psikolog")}>
              Online
            </button>
            <p className="text-white text-center text-sm font-normal mb-1">atau</p>
            <button className="rounded-lg bg-primary p-2 text-white text-lg font-semibold my-2 mx-20 text-center" onClick={() => navigate("/klinik")}>
              Offline
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
