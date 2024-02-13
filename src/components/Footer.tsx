import React from "react";
import Button from "./Button";

interface FooterProps {
  step: number;
  setStep: (type: number | ((prev: number) => number)) => void;
  nextDisable: boolean;
}

const Footer: React.FC<FooterProps> = ({ step, setStep, nextDisable }) => {
  return (
    <div
      className={`bg-white text-black h-20 w-full md:hidden flex justify-end items-center px-4 text-lg ${
        step === 1 ? "justify-end" : "justify-between"
      }`}
    >
      <button
        onClick={() => setStep(step - 1)}
        className={`text-lg text-gray-cool font-semibold ${
          step === 1 && "hidden"
        } ${step === 5 && "hidden"}`}
      >
        Go Back
      </button>
      <div
        onClick={() => setStep(step + 1)}
        className={`${nextDisable && "pointer-events-none"}`}
      >
        {step < 4 && <Button name="Next Step" />}
        {step === 4 && <Button name="Confirm" />}
      </div>
    </div>
  );
};

export default Footer;
