import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Footer from "./Footer";

const Form = () => {
  const [step, setStep] = useState(4);

  return (
    <div className="flex flex-col justify-between items-center pt-14 bg-[#f0f6ff] min-h-screen bg-no-repeat bg-top bg-mobile bg-full md:bg-none md:pt-0">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      <Footer />
    </div>
  );
};

export default Form;
