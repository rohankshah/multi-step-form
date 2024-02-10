import React from "react";
import { Switch } from "@headlessui/react";

interface BillToggleProps {
  billingOption: boolean;
  setBillingOption: (type: boolean | ((prev: boolean) => boolean)) => void;
}

const BillToggle: React.FC<BillToggleProps> = ({
  billingOption,
  setBillingOption,
}) => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-magnolia rounded-xl">
      {" "}
      <div className="flex gap-8 items-center">
        <p
          className={`${
            !billingOption ? "text-blue-marine" : "text-gray-cool"
          } font-bold`}
        >
          Monthly
        </p>
        <Switch
          checked={billingOption}
          onChange={setBillingOption}
          className={`bg-blue-marine relative inline-flex h-[1.8em] w-[3.5em] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${billingOption ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[1.6em] w-[1.6em] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <p
          className={`${
            billingOption ? "text-blue-marine" : "text-gray-cool"
          } font-bold`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default BillToggle;
