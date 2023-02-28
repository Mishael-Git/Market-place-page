import React from "react";

function Progress() {
  return (
    <div>
      <div>
        <h1 class="font-medium ">Your progress</h1>
      </div>
      <div className="bg-white rounded-xl px-5">
        <div className="flex items-center justify-between">
          <h1 class="font-bold text-lg"> Total Income</h1>
          <p class="font-bold text-lg">$ 1,4K</p>
        </div>
        <div className="rounded-md h-2 w-96 bg-[#fdefee]"></div>
      </div>
    </div>
  );
}

export default Progress;
