import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

function Total_Income() {
  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-xl px-5">
        <div className="flex items-center justify-between">
          <h1 class="font-bold text-lg"> Total Income</h1>
          <p class="font-bold text-lg">$ 1,4K</p>
        </div>
        <div className="rounded-md h-2 w-[100%] bg-[#fdefee]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoBagHandleOutline size={20} />
            <div className="flex flex-col items-center py-1 ">
              <p class="font-bold">150</p>
              <p class="font-bold">orders</p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-[#ecfffb] space-x-3 py-1 px-5">
            <HiOutlineArrowTrendingUp size={29} className=" text-[#16b976]" />
            <p class="text-xl text-[#16b976] font-bold">15%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total_Income;
