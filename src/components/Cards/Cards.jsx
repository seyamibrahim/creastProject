import React from "react";

const Cards = () => {
  return (
    <div className="w-full">
      <h1 className="text-center md:text-4xl text-5xl font-bold my-24">
        Four key questions answered by Crest
      </h1>
      <div className="cards flex md:flex-row flex-col justify-center my-3 mx-8 md:gap-4 gap-10">
        <div className="card1 bg-[#f1e9fc] rounded-3xl md:h-auto h-96">
          <div class="md:max-w-sm rounded overflow-hidden md:p-0 p-7">
            <img className="md:w-12 w-20 mx-8 mt-6 mb-3" src="./todo.svg" alt="" />
            <div class="md:px-6 md:py-4 px-8 py-6">
              <div class="font-semibold md:text-2xl text-4xl mb-3">What to order</div>
              <span class="text-gray-700  md:text-base text-3xl  ">
              Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.
              </span>
            </div>
          </div>
        </div>
        <div className="card2 bg-[#f1e9fc] rounded-3xl md:h-auto h-96">
          <div class="md:max-w-sm rounded overflow-hidden md:p-0 p-7">
            <img className="md:w-12 w-20 mx-8 mt-6 mb-3" src="./cart.svg" alt="" />
            <div class="md:px-6 md:py-4 px-8 py-6">
              <div class="font-semibold md:text-2xl text-4xl mb-3">When to order</div>
              <p class="text-gray-700 md:text-base text-3xl">
              Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.
              </p>
            </div>
          </div>
        </div>
        <div className="card3 bg-[#f1e9fc] rounded-3xl md:h-auto h-96">
          <div class="md:max-w-sm rounded overflow-hidden md:p-0 p-7">
            <img className="md:w-14 w-20 mx-8 mt-6 mb-3" src="./store.svg" alt="" />
            <div class="md:px-6 md:py-4 px-8 py-6">
              <div class="font-semibold md:text-2xl text-4xl mb-3">How much to stock</div>
              <p class="text-gray-700 md:text-base text-3xl">
              Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.
              </p>
            </div>
          </div>
        </div>
        <div className="card4 bg-[#f1e9fc] rounded-3xl md:h-auto h-96">
        <div class="md:max-w-sm rounded overflow-hidden md:p-0 p-7">
            <img className="md:w-14 w-20 mx-6 mt-6 mb-3" src="./home.svg" alt="" />
            <div class="md:px-6 md:py-4 px-8 py-6">
              <div class="font-semibold md:text-2xl
              text-4xl mb-3">Where to place</div>
              <p class="text-gray-700 md:text-base text-3xl">
              Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.
              </p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
