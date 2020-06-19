import React from "react";
import { StyledStage } from "./styles";

import Cell from "../Cell";

const Stage = ({ stage, mobileCapture }) => (
  <StyledStage
    width={stage[0].length}
    height={stage.length}
    onMouseDown={mobileCapture}
  >
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
