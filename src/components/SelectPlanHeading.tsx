import React from "react";

interface SelectPlanHeadingProps {
  value: string;
}

const SelectPlanHeading: React.FC<SelectPlanHeadingProps> = ({ value }) => {
  return (
    <p className="text-lg text-blue-purplishBlue font-semibold md:text-base md:font-bold">
      {value[0].toUpperCase() + value.slice(1)}
    </p>
  );
};

export default SelectPlanHeading;
