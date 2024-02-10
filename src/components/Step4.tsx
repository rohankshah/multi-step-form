import React from "react";
import NumberStepsMobile from "./NumberStepsMobile";
import Heading from "./Heading";
import Content from "./Content";
import NumberStepsDesktop from "./NumberStepsDesktop";
import FooterDesktop from "./FooterDesktop";

const Step4 = () => {
  return (
    <>
      {/* Mobile */}
      <div className="w-full px-5 flex flex-col items-center md:hidden">
        <NumberStepsMobile />
        <div className="bg-white w-full rounded-xl mt-14 px-6 py-8">
          <div className="flex flex-col gap-2 mb-6">
            <Heading name="Finishing Up" />
            <Content value="Double-check everything looks OK before confirming." />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="h-[40em] w-[65em] my-auto bg-white rounded-xl hidden md:flex p-5">
        {/* Image and steps */}
        <div className="w-1/3 h-full rounded-xl bg-desktop bg-no-repeat bg-cover">
          <div className="flex flex-col px-8 py-10">
            <NumberStepsDesktop />
          </div>
        </div>
        <div className="w-2/3 pt-10 px-24 flex flex-col justify-between">
          <div>
            <div className="flex flex-col gap-2 mb-8">
              <Heading name="Finishing Up" />
              <Content value="Double-check everything looks OK before confirming." />
            </div>
          </div>
          <FooterDesktop />
        </div>
      </div>
    </>
  );
};

export default Step4;
