import React from "react";
import { useNavigate } from "react-router-dom";

const YesNo = ({ visible, onClose }) => {
  if (!visible) return null;

  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="rounded-2xl shadow-lg bg-secondary ">
          <div className="p-6 text-justify">
            <p className="text-center m-2 text-2xl font-bold text-white">Keluar?</p>
            <button className="rounded-lg bg-primary p-2 text-white text-lg font-semibold text-center mx-28" onClick={() => navigate("/")}>
              Ya
            </button>
            <p className="text-white text-center text-sm font-normal mb-1">atau</p>
            <button className="rounded-lg bg-primary p-2 text-white text-lg font-semibold my-2 mx-24 text-center" onClick={onClose}>
              Tidak
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YesNo;
