import React from "react";

interface CircleNumberProps {
  name: string;
  step: number;
}

const CircleNumber: React.FC<CircleNumberProps> = ({ name, step }) => {
  return (
    <div
      className={`border border-white rounded-full flex justify-center items-center w-12 h-12 md:h-9 md:w-9 ${
        step === Number(name)
          ? "text-blue-marine bg-blue-pastelBlue border-0"
          : "text-white"
      }`}
    >
      {name}
    </div>
  );
};

export default CircleNumber;
