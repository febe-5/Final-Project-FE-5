import React from "react";

const Psikolog = () => {
  return (
    <>
      <div className="container border-4 border-mental mx-auto m-12 p-10 rounded-3xl bg-secondary lg:m-16 p-0 lg:rounded-full">
        <div className="flex flex-wrap justify-center">
          <div className="w-full mt-6 lg:w-1/2">
            <div className="container flex flex-wrap p-10">
              <div className="mx-auto p-4 lg:mb-4">
                <div className="flex justify-center">
                  <div className="rounded-2xl border-4 border-white shadow-lg bg-primary ">
                    <img className="mx-auto p-8 rounded-full hover:scale-105 md:items-center" width="400" src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto mb-8 lg:mt-28 px-20 lg:w-1/2">
            <h1 className="text-base font-semibold text-white md:text-xl">
              Temukan
              <span className="block font-extrabold text-white text-5xl pt-1 lg:text-7xl">Psikolog Profesional</span>
            </h1>
            <p className="font-semibold text-lg text-white mb-8">Kami di sekitar anda!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Psikolog;
