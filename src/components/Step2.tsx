import React from "react";

import NumberStepsMobile from "./NumberStepsMobile";
import Heading from "./Heading";
import Content from "./Content";
import NumberStepsDesktop from "./NumberStepsDesktop";
import SelectPlan from "./SelectPlan";
import BillToggle from "./BillToggle";
import FooterDesktop from "./FooterDesktop";

import { planOptions } from "../formdata/formData";

interface Step2Props {
  step: number;
  setStep: (type: number | ((prev: number) => number)) => void;
  billingOption: boolean;
  setBillingOption: (type: boolean | ((prev: boolean) => boolean)) => void;
  selectedPlan: number;
  setSelectedPlan: (type: number | ((prev: number) => number)) => void;
}

const Step2: React.FC<Step2Props> = ({
  step,
  setStep,
  billingOption,
  setBillingOption,
  selectedPlan,
  setSelectedPlan,
}) => {
  return (
    <>
      {/* Mobile */}
      <div className="w-full px-5 flex flex-col items-center md:hidden">
        <NumberStepsMobile step={step} />
        <div className="bg-white w-full rounded-xl mt-14 px-6 py-8">
          <div className="flex flex-col gap-2 mb-8">
            <Heading name="Select Your Plan" />
            <Content value="You have the option of monthly or yearly billing." />
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {planOptions.map((plan, index) => {
              return (
                <div onClick={() => setSelectedPlan(index)}>
                  <SelectPlan
                    icon={plan.icon}
                    value={plan.value}
                    valueAlt={plan.valueAlt}
                    yearly={billingOption}
                    isSelected={index === selectedPlan}
                  />
                </div>
              );
            })}
          </div>
          <BillToggle
            billingOption={billingOption}
            setBillingOption={setBillingOption}
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
              <Heading name="Select Your Plan" />
              <Content value="You have the option of monthly or yearly billing." />
            </div>
            <div className="flex gap-4 mb-8">
              {planOptions.map((plan, index) => {
                return (
                  <div onClick={() => setSelectedPlan(index)} className="w-1/3">
                    <SelectPlan
                      icon={plan.icon}
                      value={plan.value}
                      valueAlt={plan.valueAlt}
                      yearly={billingOption}
                      isSelected={index === selectedPlan}
                    />
                  </div>
                );
              })}
            </div>
            <BillToggle
              billingOption={billingOption}
              setBillingOption={setBillingOption}
            />
          </div>
          <FooterDesktop
            step={step}
            setStep={setStep}
            nextDisable={selectedPlan === 1}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
