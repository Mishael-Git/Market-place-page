import React from "react";
import { Total, Worst } from "./Info";

function Progress() {
  return (
    <div>
      <div>
        <h1 class="font-medium ">Your progress</h1>
      </div>
      <div>
        <Total />
      </div>
      <div>
        <Worst/>
      </div>
    </div>
  );
}

export default Progress;
