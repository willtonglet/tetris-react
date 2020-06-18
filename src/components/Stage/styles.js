import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(45vh / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  box-shadow: 0px 0px 41px 8px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 45vh;
  background: #111;
`;
