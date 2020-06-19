import React from "react";
import { StyledSwitch } from "./styles";

const Switch = ({ onChange, text }) => {
  return (
    <StyledSwitch htmlFor="checkbox">
      <label className="theme-switch">
        <input type="checkbox" id="checkbox" onChange={onChange} />
        <div className="slider round"></div>
      </label>
      <span className="text">{text}</span>
    </StyledSwitch>
  );
};

export default Switch;
