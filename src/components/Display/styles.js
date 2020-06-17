import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 20px;
  border: 4px solid #777;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => (props.gameOver ? "#ff6d00" : "#999")};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;
