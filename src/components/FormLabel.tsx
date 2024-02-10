import React from "react";

interface FormLabelProps {
  name: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ name }) => {
  return <p className="text-md text-blue-marine font-semibold mb-1">{name}</p>;
};

export default FormLabel;
