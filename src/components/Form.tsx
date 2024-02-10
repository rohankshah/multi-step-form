import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Footer from "./Footer";

const Form = () => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [billingOption, setBillingOption] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(-1);

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  useEffect(() => {
    console.log(name, email, phone);
  }, [name, email, phone]);

  return (
    <div className="flex flex-col justify-between items-center pt-14 bg-[#f0f6ff] min-h-screen bg-no-repeat bg-top bg-mobile bg-full md:bg-none md:pt-0">
      {step === 1 && (
        <Step1
          step={step}
          setStep={setStep}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
      )}
      {step === 2 && (
        <Step2
          step={step}
          setStep={setStep}
          billingOption={billingOption}
          setBillingOption={setBillingOption}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
      )}
      {step === 3 && (
        <Step3
          step={step}
          setStep={setStep}
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
          billingOption={billingOption}
        />
      )}
      {step >= 4 && (
        <Step4
          step={step}
          setStep={setStep}
          billingOption={billingOption}
          selectedPlan={selectedPlan}
          selectedAddOns={selectedAddOns}
        />
      )}
      <Footer step={step} setStep={setStep} />
    </div>
  );
};

export default Form;
