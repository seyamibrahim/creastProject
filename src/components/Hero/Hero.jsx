import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="">
      <div className=" flex md:flex-row flex-col bg-[#151218] md:w-full w-full md:rounded-br-[200px] md:rounded-bl-[100px] ">
        <div className="left flex flex-col justify-center mx-10 md:h-[700px] h-[900px]">
          <h1 className="md:text-6xl text-6xl text-white font-semibold">Every order</h1>
          <div className="text-sec flex flex-row my-4">
            <h1 className="md:text-6xl text-6xl font-semibold text-white">fulfilled,</h1>
            <h1 className="md:text-6xl text-6xl font-semibold t-ime"> on time.</h1>
          </div>
          <span className="text-white md:my-6 my-16 mr-32 md:text-lg text-3xl">
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </span>

          <div className="flex justify-start ">
          <button className="mt-2 btn" data="Get Started with Crest">
              
              </button>
            
            
            <div className="img">
              <img className="mx-4 " src="./arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="right flex w-full pt-14 ">
          <img className="h-[600px] w-[1000px]" src="./man.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
