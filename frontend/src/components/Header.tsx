import React from "react";
import { Logo } from "./Logo";
import { FaChevronCircleLeft } from "react-icons/fa";
import "../static/styles/burgerHeader.css";
import { useHistory } from "react-router-dom";

interface nameProps {
  name: string;
}

export const Header: React.FC<nameProps> = ({ name }) => {
  const history = useHistory();
  return (
    <div className="detail-header">
      <button onClick={history.goBack} className="btn-goback">
        <FaChevronCircleLeft size={30} color="white" />
      </button>
      <div className="icon-logo">
        <Logo />
      </div>
      <h1>{name}</h1>
      <div></div>
    </div>
  );
};
