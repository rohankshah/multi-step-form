import React from "react";

interface ContentCentreProps {
  value: string;
}

const ContentCentre: React.FC<ContentCentreProps> = ({ value }) => {
  return (
    <div className="text-xl text-gray-cool font-body text-center md:text-lg">
      {value}
    </div>
  );
};

export default ContentCentre;
