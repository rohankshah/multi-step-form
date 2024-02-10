import React from "react";
import NumberStepsMobile from "./NumberStepsMobile";
import Heading from "./Heading";
import Content from "./Content";
import NumberStepsDesktop from "./NumberStepsDesktop";
import FooterDesktop from "./FooterDesktop";
import BillSummary from "./BillSummary";
import ThankYou from "./ThankYou";

interface Step4Props {
  step: number;
  setStep: (type: number | ((prev: number) => number)) => void;
  billingOption: boolean;
  selectedPlan: number;
  selectedAddOns: number[];
}

const Step4: React.FC<Step4Props> = ({
  step,
  setStep,
  billingOption,
  selectedPlan,
  selectedAddOns,
}) => {
  return (
    <>
      {/* Mobile */}
      <div className="w-full px-5 flex flex-col items-center md:hidden">
        <NumberStepsMobile step={step} />
        <div className="bg-white w-full rounded-xl mt-14 px-6 py-8">
          {step === 4 ? (
            <>
              <div className="flex flex-col gap-2 mb-6">
                <Heading name="Finishing Up" />
                <Content value="Double-check everything looks OK before confirming." />
              </div>
              <BillSummary
                billingOption={billingOption}
                selectedPlan={selectedPlan}
                selectedAddOns={selectedAddOns}
                setStep={setStep}
              />
            </>
          ) : (
            <ThankYou />
          )}
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
            {step === 4 ? (
              <>
                <div className="flex flex-col gap-2 mb-8">
                  <Heading name="Finishing Up" />
                  <Content value="Double-check everything looks OK before confirming." />
                </div>
                <BillSummary
                  billingOption={billingOption}
                  selectedPlan={selectedPlan}
                  selectedAddOns={selectedAddOns}
                  setStep={setStep}
                />
              </>
            ) : (
              <ThankYou />
            )}
          </div>
          <FooterDesktop step={step} setStep={setStep} nextDisable={false} />
        </div>
      </div>
    </>
  );
};

export default Step4;
