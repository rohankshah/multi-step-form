import React from "react";
import CircleNumber from "./CircleNumber";

const NumberStepsMobile = () => {
  return (
    <div className="flex gap-4 text-white">
      <CircleNumber name="1" />
      <CircleNumber name="2" />
      <CircleNumber name="3" />
      <CircleNumber name="4" />
    </div>
  );
};

export default NumberStepsMobile;
