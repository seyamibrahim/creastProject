import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="header bg-[#151218]  flex justify-between">
        <div className="logo w-40 px-1 py-2 my-2 mx-9 cursor-pointer">
            <img src="./logo_Crest.png" alt="" />
        </div>
        <div className="mx-20 text-white  px-5 py-5  ">
          <ul className='flex justify-center items-center gap-9'>
            <li className='cursor-pointer hover:text-red-300'>Product</li>
            <li className='cursor-pointer hover:text-red-300'>Pricing</li>
            <li className='cursor-pointer hover:text-red-300'>Industry</li>
            <li className='cursor-pointer hover:text-red-300'>Customer Stories</li>
            <li className='cursor-pointer hover:text-red-300'>About</li>
            <li className='cursor-pointer hover:text-red-300'>Blog</li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <span className='cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500'>Login</span>
          <button className='btn rounded-3xl w-[7.3rem] font-semibold coursor-pointer bg-gradient-to-r from-pink-400 to-purple-400 px-5 py-3 my-2 mx-14 text-white'>Talk to Us</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
