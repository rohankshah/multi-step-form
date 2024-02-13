import React from "react";
import { planOptions, addOnOptions } from "../formdata/formData";

interface BillSummaryProps {
  billingOption: boolean;
  selectedPlan: number;
  selectedAddOns: number[];
  setStep: (type: number | ((prev: number) => number)) => void;
}

const BillSummary: React.FC<BillSummaryProps> = ({
  billingOption,
  selectedPlan,
  selectedAddOns,
  setStep,
}) => {
  function getValueForPlan(
    selectedPlan: number,
    type: string
  ): number | undefined {
    const valueAlt =
      type === "year"
        ? planOptions[selectedPlan]?.valueAlt
        : planOptions[selectedPlan]?.value;
    if (valueAlt) {
      const numericalPart = valueAlt.match(/\d+/)?.[0];
      if (numericalPart) {
        return Number(numericalPart);
      }
    }
    return undefined;
  }

  function getValueForAddOn(
    selectedAddOn: number,
    type: string
  ): number | undefined {
    const value =
      type === "year"
        ? addOnOptions[selectedAddOn]?.valueYr
        : addOnOptions[selectedAddOn]?.valueMo;
    if (value) {
      const numericalPart = value.match(/\d+/)?.[0];
      if (numericalPart) {
        return Number(numericalPart);
      }
    }
    return undefined;
  }

  function calculateTotal(): JSX.Element {
    let total = 0;
    if (billingOption) {
      let value = getValueForPlan(selectedPlan, "year");
      if (value) {
        total += value;
      }
    } else {
      let value = getValueForPlan(selectedPlan, "month");
      if (value) {
        total += value;
      }
    }

    selectedAddOns.forEach((addOn) => {
      if (billingOption) {
        let value = getValueForAddOn(addOn, "year");
        if (value) {
          total += value;
        }
      } else {
        let value = getValueForAddOn(addOn, "month");
        if (value) {
          total += value;
        }
      }
    });

    return (
      <p className="text-lg text-blue-purplishBlue font-bold">
        ${total}/{billingOption ? "yr" : "mo"}
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col bg-gray-magnolia p-4 rounded-lg">
        {/* Selected Plan */}
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col">
            <p className=" text-blue-marine font-bold">
              {planOptions[selectedPlan].icon[0].toUpperCase() +
                planOptions[selectedPlan].icon.slice(1)}
              ({billingOption ? "Yearly" : "Monthly"})
            </p>
            <p
              className="font-semibold text-gray-cool underline cursor-pointer"
              onClick={() => setStep(2)}
            >
              Change
            </p>
          </div>
          <div className="text-blue-marine font-bold text-lg">
            {billingOption
              ? planOptions[selectedPlan].valueAlt
              : planOptions[selectedPlan].value}
          </div>
        </div>

        {/* Line */}
        <div className="h-[1px] w-full bg-gray-light my-4"></div>

        {/* Add ons */}
        {selectedAddOns.map((ele, index) => {
          return (
            <div className="flex justify-between mb-4" key={index}>
              <p className="text-gray-cool font-semibold">
                {addOnOptions[ele].title}
              </p>
              <p className="text-gray-marine font-semibold">
                {billingOption
                  ? addOnOptions[ele].valueYr
                  : addOnOptions[ele].valueMo}
              </p>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="flex justify-between mt-2 p-4 items-center">
        <p className="text-gray-cool font-semibold">
          Total (per {billingOption ? "year" : "month"})
        </p>
        {calculateTotal()}
      </div>
    </>
  );
};

export default BillSummary;
