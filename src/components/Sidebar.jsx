import React from "react";
import { Profile } from "../assets/images/Image";
import { GoDashboard } from "react-icons/go";
import { FiArchive } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineReviews } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
function Sidebar() {
  return (
    <div className="flex flex-col bg-[#49253f] h-[95%] w-[17%] p-2 mt-0 fixed rounded-l-3xl z-10 px-11 justify-center  items-center">
        <div className="space-y-6">
          {/* Img */}
          <div className="rounded-full h-52 w-52">
            <img src={Profile} className="object-contain object-cover" />
          </div>
          <div className="flex items-center  space-x-3">
            <GoDashboard  size={22} className="text-[#e6d646]"/>
            <h1 class="font-semibold text-base text-[#e6d646]">Dashboard</h1>
          </div>
          <div className="flex items-center  space-x-3">
            <FiArchive  size={22} className="text-white"/>
            <h1 class="font-semibold text-base text-white">Products</h1>
          </div>
          <div className="flex items-center  space-x-3">
            <HiOutlineUserGroup  size={22} className="text-white"/>
            <h1 class="font-semibold text-base text-white">Customers</h1>
          </div>
          <div className="flex items-center  space-x-3">
            <MdOutlineReviews  size={22} className="text-white"/>
            <h1 class="font-semibold text-base text-white">Reviews</h1>
          </div>
          <div className="space-y-[50%]">
          <div className="flex items-center  space-x-3">
            <TbSettings  size={22} className="text-white"/>
            <h1 class="font-semibold text-base text-white">Settings</h1>
          </div>
          <div className=" flex items-center space-x-3">
          <BiLogOut size={22} className="text-white"/>
          <h1 class="font-semibold text-base text-white">Log out</h1>
        </div>
        </div>
        </div>
       
      </div>
  );
}

export default Sidebar;
