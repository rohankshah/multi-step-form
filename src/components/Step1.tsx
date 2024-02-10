import React from "react";
import NumberStepsMobile from "./NumberStepsMobile";
import Heading from "./Heading";
import Content from "./Content";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import NumberStepsDesktop from "./NumberStepsDesktop";
import FooterDesktop from "./FooterDesktop";

interface Step1Props {
  step: number;
  setStep: (type: number | ((prev: number) => number)) => void;
  name: string;
  setName: (type: string | ((prev: string) => string)) => void;
  email: string;
  setEmail: (type: string | ((prev: string) => string)) => void;
  phone: string;
  setPhone: (type: string | ((prev: string) => string)) => void;
}

const Step1: React.FC<Step1Props> = ({
  step,
  setStep,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) => {
  return (
    <>
      {/* Mobile */}
      <div className="w-full px-5 flex flex-col items-center md:hidden">
        <NumberStepsMobile step={step} />
        <div className="bg-white w-full rounded-xl mt-14 px-6 py-8">
          <div className="flex flex-col gap-2 mb-6">
            <Heading name="Personal Info" />
            <Content value="Please provide your name, email address and phone number." />
          </div>
          <FormLabel name="Name" />
          <FormInput
            placeholder="e.g. Stephen King"
            value={name}
            onChangeFunc={(e) => setName(e.target.value)}
          />
          <FormLabel name="Email Address" />
          <FormInput
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChangeFunc={(e) => setEmail(e.target.value)}
          />
          <FormLabel name="Phone Number" />
          <FormInput
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChangeFunc={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="h-[40em] w-[65em] my-auto bg-white rounded-xl hidden md:flex p-5">
        {/* Image and steps */}
        <div className="w-1/3 h-full rounded-xl bg-desktop bg-no-repeat bg-cover">
          <div className="flex flex-col px-8 py-10">
            <NumberStepsDesktop step={step} />
          </div>
        </div>
        <div className="w-2/3 pt-10 px-24 flex flex-col justify-between">
          <div>
            <div className="flex flex-col gap-2 mb-8">
              <Heading name="Personal Info" />
              <Content value="Please provide your name, email address and phone number." />
            </div>
            <FormLabel name="Name" />
            <FormInput
              placeholder="e.g. Stephen King"
              value={name}
              onChangeFunc={(e) => setName(e.target.value)}
            />
            <FormLabel name="Email Address" />
            <FormInput
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChangeFunc={(e) => setEmail(e.target.value)}
            />
            <FormLabel name="Phone Number" />
            <FormInput
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChangeFunc={(e) => setPhone(e.target.value)}
            />
          </div>
          <FooterDesktop step={step} setStep={setStep} nextDisable={false} />
        </div>
      </div>
    </>
  );
};

export default Step1;
