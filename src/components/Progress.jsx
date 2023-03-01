import React from "react";
import { Best, Total, Worst } from "./Info";

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
      <div>
        <Best/>
      </div>
    </div>
  );
}

export default Progress;
