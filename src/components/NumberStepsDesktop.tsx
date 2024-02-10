import React from "react";
import CircleNumber from "./CircleNumber";

const NumberStepsDesktop = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <CircleNumber name="1" />
          <div className="flex flex-col">
            <p className="text-sm text-white">Step 1</p>
            <p className="text-lg text-white font-semibold">Your Info</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <CircleNumber name="2" />
          <div className="flex flex-col">
            <p className="text-sm text-white">Step 2</p>
            <p className="text-lg text-white font-semibold">Select Plans</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <CircleNumber name="3" />
          <div className="flex flex-col">
            <p className="text-sm text-white">Step 3</p>
            <p className="text-lg text-white font-semibold">Add ons</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <CircleNumber name="4" />
          <div className="flex flex-col">
            <p className="text-sm text-white">Step 4</p>
            <p className="text-lg text-white font-semibold">Summary</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberStepsDesktop;
