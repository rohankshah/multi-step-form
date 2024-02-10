import React from "react";

interface AddOnSelectProps {
  isSelected: boolean;
  title: string;
  tagline: string;
  valueYr: string;
  valueMo: string;
  billingOption: boolean;
}

const AddOnSelect: React.FC<AddOnSelectProps> = ({
  isSelected,
  title,
  tagline,
  valueYr,
  valueMo,
  billingOption,
}) => {
  return (
    <div
      className={`flex justify-between items-center border-2 ${
        isSelected
          ? "border-blue-purplishBlue bg-gray-magnolia"
          : "border-gray-cool"
      } rounded-lg p-4 md:px-6`}
    >
      <div className="w-1/6">
        <input
          type="checkbox"
          className="h-6 w-6 md:h-5 md:w-5"
          checked={isSelected}
          onChange={() => {}}
        />
      </div>
      <div className="text-sm w-4/6">
        <p className=" text-blue-marine font-bold">{title}</p>
        <p className="text-gray-cool">{tagline}</p>
      </div>
      <p className="text-blue-purplishBlue font-semibold w-1/6">
        {billingOption ? valueYr : valueMo}
      </p>
    </div>
  );
};

export default AddOnSelect;
