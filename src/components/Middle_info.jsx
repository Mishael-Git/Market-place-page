import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

function Middle_info() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-start px-1">
        <div className="flex  items-center space-x-96">
          <h1 class="font-extrabold text-2xl">Welcome back, Dan!</h1>
          <IoMdNotificationsOutline size={27}/>
        </div>
        <div className="flex items-center">
        <p class="font-semibold ">23 October, Friday</p>
        </div>
      </div>
      <div className="bg-[#ff5959] px-5 py-5 h-[30%] rounded-lg ">
        <div className="space-y-9">
           <h1 class='font-bold text-2xl text-white'>Good job!</h1>
           <div className="space-y-2">
           <p class="text-slate-100">You have over 20 000 visitors on the</p>
           <p class="text-slate-100">last 10days.keep it up!</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Middle_info;
