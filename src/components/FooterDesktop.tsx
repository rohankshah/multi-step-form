import React from "react";
import Button from "./Button";

const FooterDesktop = () => {
  return (
    <div className="w-full flex justify-between mb-4">
      <button className="text-lg text-gray-cool font-semibold">Go Back</button>
      <Button name="Next Step" />
    </div>
  );
};

export default FooterDesktop;
