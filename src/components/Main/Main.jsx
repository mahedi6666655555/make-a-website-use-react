import React from "react";
import Content from "../content/Content";

const Main = () => {
  return (
    <div>
      <div className="w-full h-screen  bg-gray-800">
        <div className="flex gap-5 justify-center  pt-5">
          <Content></Content>
          <Content></Content>
        </div>
      </div>
    </div>
  );
};

export default Main;
