import React from "react";

const Cards = () => {
  return (
    <div className="container ">
      <h1 className="text-center text-4xl font-bold my-24">
        Four key questions answered by Crest
      </h1>
      <div className="cards flex flex-row justify-center w-full my-3 mx-8">
        <div className="card1 bg-[#f1e9fc] rounded-3xl">
          <div class="max-w-sm rounded overflow-hidden">
            <img className="w-12 mx-8 mt-6 mb-3" src="./todo.svg" alt="" />
            <div class="px-6 py-4">
              <div class="font-semibold text-2xl mb-3">What to order</div>
              <p class="text-gray-700 text-base">
              Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.
              </p>
            </div>
          </div>
        </div>
        <div className="card2 bg-[#f1e9fc] rounded-3xl mx-4">
          <div class="max-w-sm rounded overflow-hidden">
            <img className="w-12 mx-8 mt-6 mb-3" src="./cart.svg" alt="" />
            <div class="px-6 py-4">
              <div class="font-semibold text-2xl mb-3">When to order</div>
              <p class="text-gray-700 text-base">
              Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.
              </p>
            </div>
          </div>
        </div>
        <div className="card3 bg-[#f1e9fc] rounded-3xl mx-4">
          <div class="max-w-sm rounded overflow-hidden">
            <img className="w-14 mx-6 mt-6 mb-3" src="./store.svg" alt="" />
            <div class="px-6 py-4">
              <div class="font-semibold text-2xl mb-3">How much to stock</div>
              <p class="text-gray-700 text-base">
              Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.
              </p>
            </div>
          </div>
        </div>
        <div className="card4 bg-[#f1e9fc] rounded-3xl ">
        <div class="max-w-sm rounded overflow-hidden">
            <img className="w-14 mx-6 mt-6 mb-3" src="./home.svg" alt="" />
            <div class="px-6 py-4">
              <div class="font-semibold text-2xl mb-3">Where to place</div>
              <p class="text-gray-700 text-base">
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
