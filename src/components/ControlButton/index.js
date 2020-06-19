import React from "react";
import {
  TiArrowLeftThick as Left,
  TiArrowRightThick as Right,
  TiArrowDownThick as Down,
} from "react-icons/ti";
import { StyledControl } from "./style";

const ControlButton = ({ callback, onMouseUp, left, right, down }) => {
  const renderIcons = () => {
    if (left) return <Left />;
    if (right) return <Right />;
    if (down) return <Down />;
  };

  const handleClick = (e) => {
    e.preventDefault();
    callback(e);
  };

  return (
    <StyledControl onMouseDown={handleClick} onMouseUp={onMouseUp}>
      {renderIcons()}
    </StyledControl>
  );
};

export default ControlButton;
