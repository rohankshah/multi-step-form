import React from "react";

interface ContentProps {
  value: string;
}

const Content: React.FC<ContentProps> = ({ value }) => {
  return (
    <div className="text-xl md:text-base text-gray-cool font-body">{value}</div>
  );
};

export default Content;
