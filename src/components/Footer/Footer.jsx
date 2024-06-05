import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[700px] bg-[#151218] mt-24 flex justify-start items-center font-bold">
        <div className="flex flex-row mx-14 mb-36">
          <div className="h-44 w-0.5 my-3 bg-gradient-to-b from-pink-400 to-purple-400 "></div>
          <div className="btns flex flex-col mx-12">
            <button className="rounded-3xl p-2 w-36 text-pink-400  my-4  hover:text-white btn">STOCK OUT</button>
            <button className="rounded-3xl p-2 w-60 text-pink-400  hover:text-white btn">CASH RECOVERY CYCLE</button>
            <button className="rounded-3xl p-2 w-32 text-pink-400 my-4  hover:text-white btn">REVENUE</button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row mx-20">
            <div className=" text-[10rem] transition-all duration-400 ease-linear n-um">85</div>
            <div className="sym text-white text-4xl pt-36">%</div>
          </div>
          <div className="div text-white text-3xl ">
            Reduction in out-of-stock
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
