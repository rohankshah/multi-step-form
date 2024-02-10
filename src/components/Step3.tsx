import React, { useState } from "react";
import NumberStepsMobile from "./NumberStepsMobile";
import Heading from "./Heading";
import Content from "./Content";
import NumberStepsDesktop from "./NumberStepsDesktop";
import FooterDesktop from "./FooterDesktop";
import AddOnSelect from "./AddOnSelect";

const Step3 = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  const addOnOptions = [
    {
      id: 1,
      title: "Online Service",
      tagline: "Access to multiplayer games",
      valueYr: "$10/yr",
      valueMo: "$1/mo",
    },
    {
      id: 2,
      title: "Larger Storage",
      tagline: "Extra 1TB of storage",
      valueYr: "$20/yr",
      valueMo: "$2/mo",
    },
    {
      id: 3,
      title: "Customizable Profile",
      tagline: "Custom theme on your profile",
      valueYr: "$20/yr",
      valueMo: "$2/mo",
    },
  ];

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
        <NumberStepsMobile />
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
            <NumberStepsDesktop />
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
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <FooterDesktop />
        </div>
      </div>
    </>
  );
};

export default Step3;
