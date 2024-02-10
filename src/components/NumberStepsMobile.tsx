import React from "react";
import CircleNumber from "./CircleNumber";

interface NumberStepsMobileProps {
  step: number;
}

const NumberStepsMobile: React.FC<NumberStepsMobileProps> = ({ step }) => {
  return (
    <div className="flex gap-4 text-white">
      <CircleNumber name="1" step={step} />
      <CircleNumber name="2" step={step} />
      <CircleNumber name="3" step={step} />
      <CircleNumber name="4" step={step} />
    </div>
  );
};

export default NumberStepsMobile;
