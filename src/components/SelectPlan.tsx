import React from "react";
import Content from "./Content";
import SelectPlanHeading from "./SelectPlanHeading";

interface SelectPlanProps {
  icon: string;
  value: string;
  valueAlt: string;
  yearly: boolean;
  isSelected: boolean;
}

const SelectPlan: React.FC<SelectPlanProps> = ({
  icon,
  value,
  valueAlt,
  yearly,
  isSelected,
}) => {
  return (
    <div
      className={`flex gap-4 border-2 ${
        isSelected
          ? "border-blue-purplishBlue bg-gray-magnolia"
          : "border-gray-cool"
      } rounded-lg p-4 cursor-pointer md:flex-col md:gap-10`}
    >
      {icon === "arcade" && (
        <img
          src="./assets/images/icon-arcade.svg"
          alt="icon-arcade"
          className="w-fit"
        />
      )}
      {icon === "advanced" && (
        <img
          src="./assets/images/icon-advanced.svg"
          alt="icon-advanced"
          className="w-fit"
        />
      )}
      {icon === "pro" && (
        <img
          src="./assets/images/icon-pro.svg"
          alt="icon-pro"
          className="w-fit"
        />
      )}
      <div>
        <SelectPlanHeading value={icon} />
        {yearly ? <Content value={valueAlt} /> : <Content value={value} />}
        {/* Months free / disclaimer */}
        {yearly && (
          <p className="text-blue-purplishBlue font-semibold mt-[1px] md:text-sm md:mt-1">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectPlan;
