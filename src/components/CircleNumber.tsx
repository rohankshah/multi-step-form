import React from "react";

interface CircleNumberProps {
  name: string;
}

const CircleNumber: React.FC<CircleNumberProps> = ({ name }) => {
  return (
    <div className="border-2 border-white rounded-full flex justify-center items-center text-white w-12 h-12 md:h-9 md:w-9">
      {name}
    </div>
  );
};

export default CircleNumber;
