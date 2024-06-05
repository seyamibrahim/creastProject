import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#151218] navbar flex justify-between items-center">
        <div className="logo text-center  my-2 mx-9 ">
          <div className="px-1 py-2 w-40 cursor-pointer">
            <img src="./logo_Crest.png" alt="" />
          </div>
        </div>
        <div className="mx-20 text-white  px-5 py-5  ">
          <ul className="flex justify-center items-center gap-9">
            <li className="cursor-pointer hover:text-red-300">Product</li>
            <li className="cursor-pointer hover:text-red-300">Pricing</li>
            <li className="cursor-pointer hover:text-red-300">Industry</li>
            <li className="cursor-pointer hover:text-red-300">
              Customer Stories
            </li>
            <li className="cursor-pointer hover:text-red-300">About</li>
            <li className="cursor-pointer hover:text-red-300">Blog</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <a href="">
            <li className="text-pink-300 cursor-pointer  list-none  transition-colors duration-700 ease-linear hover:text-white">
              Login
            </li>
          </a>
          <button className=" rounded-3xl w-[7.3rem] font-semibold coursor-pointer px-5 py-3 my-2 mx-14 text-white hover:text-black bg-gradient-to-br from-pink-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 ...">
            Talk to Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
