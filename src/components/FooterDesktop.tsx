import React, { useEffect } from "react";
import Button from "./Button";

interface FooterDesktopProps {
  step: number;
  setStep: (type: number | ((prev: number) => number)) => void;
  nextDisable: boolean;
}

const FooterDesktop: React.FC<FooterDesktopProps> = ({
  step,
  setStep,
  nextDisable,
}) => {
  useEffect(() => {
    console.log(nextDisable);
  }, [nextDisable]);

  return (
    <div
      className={`w-full flex ${
        step === 1 ? "justify-end" : "justify-between"
      } mb-4`}
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

export default FooterDesktop;
