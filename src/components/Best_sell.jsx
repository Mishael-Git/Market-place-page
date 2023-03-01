import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

function Best_sell() {
  return (
    <div className=" px-4 py-4">
      <div className="bg-white rounded-xl px-5">
        <div className="flex items-center justify-between">
          <h1 class="font-bold text-lg">Best selling</h1>
          <p class="font-bold text-lg">$ 1,0k</p>
        </div>
        <div className="rounded-md h-2 w-[100%] bg-[#fdefee]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoBagHandleOutline size={20} />
            <div className="flex flex-col items-center py-1 space-x-2 ">
              <p class="font-bold">65</p>
              <p class="font-bold">orders</p>
            </div>
          </div>
          <div className="flex items-center rounded-xl space-x-3 bg-[#ecfffb] py-1 px-5">
            <HiOutlineArrowTrendingUp size={29} className=" text-[#16b976]" />
            <p class="text-xl text-[#16b976] font-bold">45%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Best_sell