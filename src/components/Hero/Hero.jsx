import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container flex flex-row bg-[#151218] h-[90vh] w-full  justify-between">
      <div className="left flex flex-col justify-center mx-10 ">
        <h1 className="text-6xl  text-white font-semibold">Every order</h1>
        <div className="text-sec flex flex-row my-4">
          <h1 className="text-6xl font-semibold text-white">fulfilled,</h1>
          <h1 className="text-6xl font-semibold text-white"> on time.</h1>
        </div>
        <span className=" text-white my-6 mr-32 text-lg">
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </span>

        <div className="flex justify-start ">
          <button
            className="btnn hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  transition-shadow "
          >
            Get Started with Crest
          </button>
          <div className="img">
            <img className="mx-4 " src="./arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="right img flex justify-center w-full ">
        <img src="./img.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
