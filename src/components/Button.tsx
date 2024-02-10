import React from "react";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className="text-white bg-blue-marine px-6 py-3 rounded-md text-sm cursor-pointer">
      {name}
    </div>
  );
};

export default Button;
