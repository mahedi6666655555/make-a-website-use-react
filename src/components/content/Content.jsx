import React from "react";

const Content = (props) => {
  return (
    <div>
      <div className="w-[300px] rounded-lg text-white  h-[500px] bg-gray-500">
        <div className="">
          <div className="w-[100px] h-[100px] bg-red-300 rounded-lg mx-auto pt-4">
            <h1 className="text-2xl text-center">mahedi</h1>
          </div>
          <h1>
            <h1 className=" pt-4 pb-4 pl-5 text-2xl font-bold">name:Mahedi Hassan</h1>
            <p className="pl-5">discription: Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ipsam aliquid error. Qui, error aliquid a nobis saepe </p>
            <div className="text-center">
                
            <button className="py-4 px-7 bg-gray-900 rounded-lg ">submit</button>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
