import React from "react";
import Heading from "./Heading";
import ContentCentre from "./ContentCentre";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center py-14">
      <img
        src="./assets/images/icon-thank-you.svg"
        alt="thankyouIcon"
        className="h-16 w-16 mb-8"
      />
      <div className="mb-4">
        <Heading name="Thank You!" />
      </div>
      <ContentCentre value="Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com" />
    </div>
  );
};

export default ThankYou;
