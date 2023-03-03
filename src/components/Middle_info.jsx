import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Basket } from "../assets/images/Image";
import { Recent } from "./Info";

function Middle_info() {
  return (
    <div className=" px-5 py-5 space-y-6 ">
      <div className="flex flex-col items-start justify-start px-1">
        <div className="flex  items-center space-x-96">
          <h1 class="font-extrabold text-3xl">Welcome back, Dan!</h1>
          <IoMdNotificationsOutline size={27}/>
        </div>
        <div className="flex items-center">
        <p class="font-semibold ">23 October, Friday</p>
        </div>
      </div>
      <div className="bg-[#ff5959] px-5 py-5 h-[30%] rounded-xl w-[94%] ">
        <div className="space-y-9">
           <h1 class='font-bold text-2xl text-white'>Good job!</h1>
           <div className="space-y-2">
           <p class="text-slate-100">You have over 20 000 visitors on the </p>
           <p class="text-slate-100">last 10days. keep it up!</p>
           </div>
           <div>
            {/* Img */}
            {/* <div className="w-28 h-24">
              <img src={Basket} className="w-full h-full object-contain object-cover"/>
            </div> */}
           </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10">
        <div className="flex flex-col items-center border rounded-xl h-[40%] py-5 px-5 bg-white">
           <h1 class="font-extrabold text-2xl">+6,9K</h1>
           <p>Favourite</p>
        </div>
        <div className="flex flex-col items-center border rounded-xl h-[40%] py-5 px-5 bg-white">
          <h1 class="font-extrabold text-2xl">+2,4K</h1>
          <p>Add to bag</p> 
        </div>
        <div className="flex flex-col items-center border rounded-xl h-[40%] py-5 px-5 bg-white">
          <h1 class="font-extrabold text-2xl">+1,0K</h1>
          <p>Orders</p> 
        </div>
      </div>
      <div>
        <Recent/>
      </div>
    </div>
  );
}

export default Middle_info;
