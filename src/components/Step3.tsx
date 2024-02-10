import React from "react";
import NumberStepsMobile from "./NumberStepsMobile";
import Heading from "./Heading";
import Content from "./Content";
import NumberStepsDesktop from "./NumberStepsDesktop";
import FooterDesktop from "./FooterDesktop";
import AddOnSelect from "./AddOnSelect";

import { addOnOptions } from "../formdata/formData";

interface Step3Props {
  step: number;
  setStep: (type: number | ((prev: number) => number)) => void;
  selectedAddOns: number[];
  setSelectedAddOns: (type: number[] | ((prev: number[]) => number[])) => void;
  billingOption: boolean;
}

const Step3: React.FC<Step3Props> = ({
  step,
  setStep,
  selectedAddOns,
  setSelectedAddOns,
  billingOption,
}) => {
  function handleAddOnSelect(index: number) {
    if (selectedAddOns.includes(index)) {
      setSelectedAddOns(selectedAddOns.filter((ele) => ele !== index));
    } else {
      setSelectedAddOns([...selectedAddOns, index]);
    }
  }

  return (
    <>
      {/* Mobile */}
      <div className="w-full px-5 flex flex-col items-center md:hidden">
        <NumberStepsMobile step={step} />
        <div className="bg-white w-full rounded-xl mt-14 px-6 py-8">
          <div className="flex flex-col gap-2 mb-6">
            <Heading name="Pick add-ons" />
            <Content value="Add-ons help enhance your gaming experience." />
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {addOnOptions.map((ele, index) => {
              return (
                <div key={ele.id} onClick={() => handleAddOnSelect(index)}>
                  <AddOnSelect
                    isSelected={selectedAddOns.includes(index)}
                    title={ele.title}
                    tagline={ele.tagline}
                    valueYr={ele.valueYr}
                    valueMo={ele.valueMo}
                    billingOption={billingOption}
                  />
                </div>
              );
            })}
          </div>
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
              <Heading name="Pick add-ons" />
              <Content value="Add-ons help enhance your gaming experience." />
            </div>
            <div className="flex flex-col gap-4 mb-8">
              {addOnOptions.map((ele, index) => {
                return (
                  <div key={ele.id} onClick={() => handleAddOnSelect(index)}>
                    <AddOnSelect
                      isSelected={selectedAddOns.includes(index)}
                      title={ele.title}
                      tagline={ele.tagline}
                      valueYr={ele.valueYr}
                      valueMo={ele.valueMo}
                      billingOption={billingOption}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <FooterDesktop step={step} setStep={setStep} nextDisable={false} />
        </div>
      </div>
    </>
  );
};

export default Step3;
