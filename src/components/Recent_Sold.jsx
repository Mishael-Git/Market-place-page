import React from "react";
import { Winmax } from "../assets/images/Image";
import { BsSunglasses } from "react-icons/bs";
import { GiBasket } from "react-icons/gi";

function Recent_Sold() {
  return (
    <div className=" space-y-4">
      {/* Header */}
      <div>
        <h1 class="text-2xl font-bold">Recent Sold</h1>
      </div>
      {/* Body */}
      <div className="flex items-center space-x-6">
        <div className="flex flex-col  relative">
          {/* Img */}
          <div className="w-[310px] h-[300px]">
            <img src={Winmax} className="w-full h-full rounded-2xl " />
          </div>
          <div className="flex flex-col absolute px-5">
          <h1 class="font-bold text-lg">Bang Bag</h1>
          <p class="font-semibold text-base">$1,5k earned</p>
          </div>
        </div>
        <div className=" space-y-7">
        <div className="flex items-center space-x-6">
          <div className="bg-[#f6f7fb] w-[100%] h-[100%] px-4 py-4 rounded-3xl ">
            <BsSunglasses
              size={30}
              className="bg-black text-white rounded-full h-14 w-14 px-2"
            />
          </div>
          <div className="bg-[#f6f7fb] w-[100%] h-[100%] px-4 py-4 rounded-3xl">
            <GiBasket
              size={30}
              className="bg-black text-white rounded-full h-14 w-14 px-2 "
            />
          </div>
        </div>
        <div className="bg-[#e7b4b3] px-5 py-2 rounded-2xl">
          <h1 class="font-bold text-xl">Dresses</h1>
          <div className="flex items-center justify-between">
          <p>25 items</p>
          <p>$3,5 earned</p>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
}

export default Recent_Sold;
