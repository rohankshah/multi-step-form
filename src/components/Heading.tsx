import React from "react";

interface HeadingProps {
  name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <h1 className="text-3xl text-blue-marine font-bold font-body">{name}</h1>
  );
};

export default Heading;
