import React from "react";

const PopUp = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="rounded-2xl shadow-lg bg-secondary ">
          <button onClick={onClose} className="pt-1 pr-3 text-white float-right">
            X
          </button>
          <div className="p-6 text-justify">
            <p className="m-2 text-2xl font-extrabold text-white">Opsi Konsultasi</p>
            <p className="rounded-lg bg-primary p-2 text-white text-lg mt-1 mb-1 font-semibold text-center">Online</p>
            <p className="text-white text-center text-sm font-normal mb-1">atau</p>
            <p className="rounded-lg bg-primary p-2 text-white text-lg font-semibold text-center">Offline</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
