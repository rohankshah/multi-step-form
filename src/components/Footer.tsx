import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="bg-white text-black h-20 w-full md:hidden flex justify-end items-center px-4 text-lg">
      <Button name="Next Step" />
    </div>
  );
};

export default Footer;
