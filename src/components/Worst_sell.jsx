import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";

function Worst_sell() {
  return (
    <div className=" space-y-6 h-[20%] px-4 py-4">
      <div className="bg-white rounded-xl px-5">
        <div className="flex items-center justify-between">
          <h1 class="font-bold text-lg">Worst selling</h1>
          <p class="font-bold text-lg">$ 1,0k</p>
        </div>
        <div className="rounded-md h-2 w-[100%] bg-[#fdefee]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoBagHandleOutline size={20} />
            <div className="flex flex-col items-center py-1 space-x-2 ">
              <p class="font-bold">85</p>
              <p class="font-bold">orders</p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-[#fdefee] py-1 px-5">
            <HiOutlineArrowTrendingDown size={29} className=" text-[#ea5455]" />
            <p class="text-xl text-[#ea5455] font-bold">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worst_sell;
