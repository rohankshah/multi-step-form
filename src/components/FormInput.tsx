import React, { ChangeEvent } from "react";

interface FormInputProps {
  placeholder: string;
  value: string | number;
  onChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChangeFunc,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChangeFunc}
      className="border-2 border-gray-cool rounded-md h-10 w-full px-2 mb-3"
    />
  );
};

export default FormInput;
