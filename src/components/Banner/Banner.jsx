import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-full h-screen items-center grid bg-gray-500 text-white">
        <div className=" text-center">
          <h1 className="  text-6xl font-bold">My name is <span className="font-extrabold text-gray-900 ">Mahedi Hassan</span></h1>
          <p className="w-1/2 mx-auto pt-5 pb-5 text-2xl font-bold"><span className="text-gray-900">Lorem ipsum dolor</span> sit amet, consectetur adipisicing elit. Consequatur ullam laboriosam autem. Earum, nihil beatae impedit reiciendis voluptatibus maxime quidem.</p>
          <div>
            <button className="py-3 px-7 bg-gray-900 mr-5 rounded-lg ">
              hire us
            </button>
            <button className="py-3 px-7 bg-gray-900 rounded-lg ">
              about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
