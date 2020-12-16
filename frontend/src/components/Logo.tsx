import React from "react";
import textLogo from "../static/images/Hamburgy.png";

export const Logo: React.FC = () => {
  return (
    <>
      <img src="/favicon.ico" alt="logo" width="100px" />
      <img src={textLogo} alt="text-logo" width="110px" />
    </>
  );
};
